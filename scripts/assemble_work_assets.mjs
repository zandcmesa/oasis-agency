#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CHUNKS_DIR = join(__dirname, '../apps/agency-site/public/work/_chunks');
const WORK_DIR = join(__dirname, '../apps/agency-site/public/work');
const MANIFEST_PATH = join(CHUNKS_DIR, 'manifest.json');

const EXPECTED_SIZES = {
  'cornerstone-clip-01.jpg': 100856,
  'cornerstone-clip-miracles.jpg': 69399,
  'cornerstone-site-about.jpg': 78439,
  'cornerstone-site-home.jpg': 107017,
  'cornerstone-site-sermons.jpg': 130515,
  'foster-the-city-still-02.jpg': 59452,
  'foster-the-city-still.jpg': 55375,
};

function log(msg, level = 'info') {
  const prefix = {
    info: '✓',
    warn: '⚠',
    error: '✗',
  }[level] || '·';
  console.log(`${prefix} ${msg}`);
}

function assembleSegments(basePath) {
  const dir = dirname(basePath);
  const base = basePath.split('/').pop();
  
  const segments = [];
  let i = 0;
  
  while (true) {
    const segPath = join(dir, `${base}.s${i}`);
    if (!existsSync(segPath)) break;
    segments.push(segPath);
    i++;
  }
  
  if (segments.length === 0) return null;
  
  log(`  Assembling ${segments.length} segments for ${base}`, 'info');
  const parts = segments.map(s => readFileSync(s, 'utf8'));
  const assembled = parts.join('');
  
  writeFileSync(basePath, assembled, 'utf8');
  log(`  → Created ${base} (${assembled.length} bytes)`, 'info');
  
  return assembled.length;
}

function assembleAsset(assetConfig) {
  const { name, total, parts } = assetConfig;
  const jpegName = name.replace('.b64', '');
  
  log(`\nProcessing ${jpegName}...`);
  
  for (const partInfo of parts) {
    const partPath = join(CHUNKS_DIR, partInfo.file);
    
    if (!existsSync(partPath)) {
      const assembled = assembleSegments(partPath);
      if (!assembled) {
        log(`  Missing: ${partInfo.file}`, 'warn');
        return false;
      }
      
      if (assembled !== partInfo.len) {
        log(`  Size mismatch: ${partInfo.file} (expected ${partInfo.len}, got ${assembled})`, 'error');
        return false;
      }
    }
  }
  
  const b64Parts = [];
  for (const partInfo of parts) {
    const partPath = join(CHUNKS_DIR, partInfo.file);
    if (!existsSync(partPath)) {
      log(`  Cannot assemble: missing ${partInfo.file}`, 'error');
      return false;
    }
    const content = readFileSync(partPath, 'utf8');
    b64Parts.push(content);
  }
  
  const fullB64 = b64Parts.join('');
  
  if (fullB64.length !== total) {
    log(`  Base64 length mismatch (expected ${total}, got ${fullB64.length})`, 'error');
    return false;
  }
  
  const b64Path = join(CHUNKS_DIR, name);
  writeFileSync(b64Path, fullB64, 'utf8');
  log(`  Created ${name} (${fullB64.length} bytes)`);
  
  const binaryData = Buffer.from(fullB64, 'base64');
  
  const expectedSize = EXPECTED_SIZES[jpegName];
  if (expectedSize && binaryData.length !== expectedSize) {
    log(`  JPEG size mismatch (expected ${expectedSize}, got ${binaryData.length})`, 'error');
    return false;
  }
  
  if (binaryData[0] !== 0xFF || binaryData[1] !== 0xD8) {
    log(`  Invalid JPEG magic bytes (expected FF D8, got ${binaryData[0].toString(16).toUpperCase().padStart(2, '0')} ${binaryData[1].toString(16).toUpperCase().padStart(2, '0')})`, 'error');
    return false;
  }
  
  const jpegPath = join(WORK_DIR, jpegName);
  writeFileSync(jpegPath, binaryData);
  log(`  ✓ Created ${jpegName} (${binaryData.length} bytes, starts with FF D8)`);
  
  return true;
}

function main() {
  console.log('Work Asset Assembly Tool\n');
  
  if (!existsSync(MANIFEST_PATH)) {
    log(`Manifest not found: ${MANIFEST_PATH}`, 'error');
    process.exit(1);
  }
  
  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
  
  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;
  
  for (const asset of manifest) {
    const jpegName = asset.name.replace('.b64', '');
    const jpegPath = join(WORK_DIR, jpegName);
    
    if (existsSync(jpegPath)) {
      const stat = readFileSync(jpegPath);
      const expectedSize = EXPECTED_SIZES[jpegName];
      
      if (expectedSize && stat.length === expectedSize) {
        log(`\n${jpegName} already exists and is correct (${stat.length} bytes)`, 'info');
        skipCount++;
        continue;
      }
    }
    
    const success = assembleAsset(asset);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Summary: ${successCount} assembled, ${skipCount} skipped, ${failCount} failed`);
  
  if (failCount > 0) {
    process.exit(1);
  }
}

main();

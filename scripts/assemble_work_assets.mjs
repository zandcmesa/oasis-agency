#!/usr/bin/env node

/**
 * Assemble work assets from base64 chunks
 * 
 * Expected files and sizes:
 * - foster-the-city-still.jpg = 55375 bytes
 * - foster-the-city-still-02.jpg = 59452 bytes
 * - cornerstone-clip-miracles.jpg = 69399 bytes
 * - cornerstone-site-about.jpg = 78439 bytes
 * - cornerstone-clip-01.jpg = 100856 bytes
 * - cornerstone-site-home.jpg = 107017 bytes
 * - cornerstone-site-sermons.jpg = 130515 bytes
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CHUNKS_DIR = join(__dirname, '../apps/agency-site/public/work/_chunks');
const OUTPUT_DIR = join(__dirname, '../apps/agency-site/public/work');

const EXPECTED_FILES = {
  'foster-the-city-still.jpg': 55375,
  'foster-the-city-still-02.jpg': 59452,
  'cornerstone-clip-miracles.jpg': 69399,
  'cornerstone-site-about.jpg': 78439,
  'cornerstone-clip-01.jpg': 100856,
  'cornerstone-site-home.jpg': 107017,
  'cornerstone-site-sermons.jpg': 130515,
};

function validateJPEG(buffer) {
  if (buffer.length < 2) return false;
  return buffer[0] === 0xFF && buffer[1] === 0xD8;
}

function assembleFile(filename) {
  console.log(`\nProcessing: ${filename}`);
  
  // Find all part files for this image
  const partFiles = readdirSync(CHUNKS_DIR)
    .filter(f => f.startsWith(`${filename}.b64.part`))
    .sort();
  
  if (partFiles.length === 0) {
    console.log(`  ❌ No part files found`);
    return false;
  }
  
  console.log(`  Found ${partFiles.length} part file(s): ${partFiles.join(', ')}`);
  
  // Concatenate all parts
  let concatenated = '';
  for (const partFile of partFiles) {
    const partPath = join(CHUNKS_DIR, partFile);
    const partData = readFileSync(partPath, 'utf8');
    concatenated += partData;
    console.log(`  Read ${partFile}: ${partData.length} chars`);
  }
  
  console.log(`  Total base64 length: ${concatenated.length} chars`);
  
  // Decode base64
  let decoded;
  try {
    decoded = Buffer.from(concatenated, 'base64');
    console.log(`  Decoded to: ${decoded.length} bytes`);
  } catch (error) {
    console.log(`  ❌ Base64 decode failed: ${error.message}`);
    return false;
  }
  
  // Validate JPEG
  if (!validateJPEG(decoded)) {
    console.log(`  ❌ Invalid JPEG (first bytes: ${decoded.slice(0, 2).toString('hex')})`);
    return false;
  }
  
  console.log(`  ✅ Valid JPEG header (FF D8)`);
  
  // Check expected size
  const expectedSize = EXPECTED_FILES[filename];
  if (decoded.length !== expectedSize) {
    console.log(`  ⚠️  Size mismatch: got ${decoded.length} bytes, expected ${expectedSize} bytes`);
    console.log(`  ⚠️  File is ${((decoded.length / expectedSize) * 100).toFixed(1)}% complete`);
  } else {
    console.log(`  ✅ Size matches expected ${expectedSize} bytes`);
  }
  
  // Write file
  const outputPath = join(OUTPUT_DIR, filename);
  writeFileSync(outputPath, decoded);
  console.log(`  ✅ Written to: ${outputPath}`);
  
  return decoded.length === expectedSize;
}

function checkManifest() {
  const manifestPath = join(CHUNKS_DIR, 'manifest.json');
  if (existsSync(manifestPath)) {
    console.log('Found manifest.json:');
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    console.log(JSON.stringify(manifest, null, 2));
    return manifest;
  }
  return null;
}

function main() {
  console.log('=== Work Assets Assembly Tool ===\n');
  
  if (!existsSync(CHUNKS_DIR)) {
    console.error(`❌ Chunks directory not found: ${CHUNKS_DIR}`);
    process.exit(1);
  }
  
  // Check for manifest
  checkManifest();
  
  // List all files in chunks directory
  console.log('\nFiles in chunks directory:');
  const allFiles = readdirSync(CHUNKS_DIR);
  allFiles.forEach(f => {
    const stat = statSync(join(CHUNKS_DIR, f));
    console.log(`  - ${f} (${stat.size} bytes)`);
  });
  
  // Try to assemble each expected file
  console.log('\n=== Assembly Results ===');
  const results = {
    complete: [],
    incomplete: [],
    missing: []
  };
  
  for (const [filename, expectedSize] of Object.entries(EXPECTED_FILES)) {
    const success = assembleFile(filename);
    
    const outputPath = join(OUTPUT_DIR, filename);
    if (existsSync(outputPath)) {
      const actualSize = statSync(outputPath).size;
      if (actualSize === expectedSize) {
        results.complete.push(filename);
      } else {
        results.incomplete.push({ filename, actualSize, expectedSize });
      }
    } else {
      results.missing.push(filename);
    }
  }
  
  // Summary
  console.log('\n=== Summary ===');
  console.log(`✅ Complete: ${results.complete.length}`);
  results.complete.forEach(f => console.log(`   - ${f}`));
  
  console.log(`⚠️  Incomplete: ${results.incomplete.length}`);
  results.incomplete.forEach(r => {
    const percent = ((r.actualSize / r.expectedSize) * 100).toFixed(1);
    console.log(`   - ${r.filename}: ${r.actualSize}/${r.expectedSize} bytes (${percent}%)`);
  });
  
  console.log(`❌ Missing: ${results.missing.length}`);
  results.missing.forEach(f => console.log(`   - ${f}`));
  
  if (results.incomplete.length > 0 || results.missing.length > 0) {
    console.log('\n⚠️  Some files are incomplete or missing.');
    console.log('   Upload complete base64 part files to _chunks/ directory and run again.');
    process.exit(1);
  }
  
  console.log('\n✅ All files assembled successfully!');
}

main();

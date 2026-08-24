# Missing Work Assets

## Status: 6 of 7 files missing

The file attachment mechanism failed to deliver the JPEG files. Only partial data for one file exists.

## Current State

### ✅ Partial (16.3% complete)
- `foster-the-city-still.jpg` - **9,000 / 55,375 bytes** (16.3%)
  - ✅ Valid JPEG header (FF D8)
  - ⚠️ Truncated at 9KB
  - Created from: `_chunks/foster-the-city-still.jpg.b64.part00`

### ❌ Completely Missing (0 bytes received)

1. **foster-the-city-still-02.jpg** - 59,452 bytes needed
2. **cornerstone-clip-miracles.jpg** - 69,399 bytes needed
3. **cornerstone-site-about.jpg** - 78,439 bytes needed
4. **cornerstone-clip-01.jpg** - 100,856 bytes needed
5. **cornerstone-site-home.jpg** - 107,017 bytes needed
6. **cornerstone-site-sermons.jpg** - 130,515 bytes needed

**Total missing data: ~595 KB**

## What Happened

The user message indicated "Seven JPEG images are attached to this message (file:// from the launcher)" but:
- No binary JPEG files were found in common attachment locations (/tmp, ~/.cursor, /opt, artifacts)
- Only one partial base64-encoded chunk file exists
- No complete chunk sequences for any file
- No manifest.json to guide assembly

## How to Fix

### Option 1: Upload complete base64 chunks
Place complete base64-encoded files in `apps/agency-site/public/work/_chunks/` with naming pattern:
- `<filename>.b64.part00`, `.b64.part01`, `.b64.part02`, etc.

Then run:
```bash
node scripts/assemble_work_assets.mjs
```

### Option 2: Upload binary JPEGs directly
Copy binary JPEG files directly to `apps/agency-site/public/work/` with exact filenames and sizes as listed above.

### Option 3: Alternative delivery method
- Upload to a cloud storage service (Google Drive, Dropbox, etc.)
- Provide direct download URLs
- Use a different file transfer mechanism

## Validation Requirements

Each JPEG must:
1. Start with bytes `FF D8` (JPEG magic number)
2. Match the expected file size exactly
3. Be a valid, complete JPEG file

Run validation:
```bash
cd /workspace
node scripts/assemble_work_assets.mjs
```

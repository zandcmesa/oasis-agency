#!/usr/bin/env python3
"""
Decode work asset JPEGs from base64-encoded chunks.

This script reads the manifest.json from apps/agency-site/public/work/_chunks/
and reconstructs binary JPEG files by concatenating and decoding the base64 parts.

Expected output sizes (bytes):
- foster-the-city-still.jpg: 55375
- foster-the-city-still-02.jpg: 59452
- cornerstone-clip-miracles.jpg: 69399
- cornerstone-site-about.jpg: 78439
- cornerstone-clip-01.jpg: 100856
- cornerstone-site-home.jpg: 107017
- cornerstone-site-sermons.jpg: 130515
"""

import json
import base64
from pathlib import Path

# Expected sizes for verification
EXPECTED_SIZES = {
    "foster-the-city-still.jpg": 55375,
    "foster-the-city-still-02.jpg": 59452,
    "cornerstone-clip-miracles.jpg": 69399,
    "cornerstone-site-about.jpg": 78439,
    "cornerstone-clip-01.jpg": 100856,
    "cornerstone-site-home.jpg": 107017,
    "cornerstone-site-sermons.jpg": 130515,
}

# JPEG magic bytes
JPEG_MAGIC = b'\xFF\xD8'

def main():
    workspace_root = Path(__file__).parent.parent
    chunks_dir = workspace_root / "apps/agency-site/public/work/_chunks"
    output_dir = workspace_root / "apps/agency-site/public/work"
    manifest_path = chunks_dir / "manifest.json"
    
    if not manifest_path.exists():
        print(f"ERROR: Manifest not found at {manifest_path}")
        return 1
    
    with open(manifest_path, 'r') as f:
        manifest = json.load(f)
    
    print(f"Processing {len(manifest)} images from manifest...")
    print()
    
    success_count = 0
    failure_count = 0
    
    for entry in manifest:
        b64_name = entry["name"]
        jpg_name = b64_name.replace(".b64", "")
        total_size = entry["total"]
        parts = entry["parts"]
        
        print(f"Processing: {jpg_name}")
        print(f"  Expected base64 size: {total_size} bytes")
        print(f"  Parts: {len(parts)}")
        
        # Concatenate all parts
        base64_data = []
        missing_parts = []
        
        for part in parts:
            part_file = chunks_dir / part["file"]
            if not part_file.exists():
                missing_parts.append(part["file"])
                continue
            
            with open(part_file, 'r') as f:
                content = f.read()
                base64_data.append(content)
        
        if missing_parts:
            print(f"  ❌ MISSING PARTS: {', '.join(missing_parts)}")
            failure_count += 1
            print()
            continue
        
        # Join all base64 parts
        full_base64 = ''.join(base64_data)
        
        if len(full_base64) != total_size:
            print(f"  ⚠️  WARNING: Concatenated size {len(full_base64)} != expected {total_size}")
        
        # Decode base64
        try:
            binary_data = base64.b64decode(full_base64)
        except Exception as e:
            print(f"  ❌ Base64 decode failed: {e}")
            failure_count += 1
            print()
            continue
        
        # Verify JPEG magic bytes
        if not binary_data.startswith(JPEG_MAGIC):
            print(f"  ❌ Invalid JPEG header: {binary_data[:2].hex()}")
            failure_count += 1
            print()
            continue
        
        # Verify expected size
        expected_size = EXPECTED_SIZES.get(jpg_name)
        if expected_size and len(binary_data) != expected_size:
            print(f"  ❌ Size mismatch: got {len(binary_data)}, expected {expected_size}")
            failure_count += 1
            print()
            continue
        
        # Write the binary file
        output_path = output_dir / jpg_name
        output_path.write_bytes(binary_data)
        
        print(f"  ✅ Written: {len(binary_data)} bytes")
        print(f"     Header: {binary_data[:2].hex()}")
        print(f"     Path: {output_path}")
        success_count += 1
        print()
    
    print("=" * 60)
    print(f"Summary: {success_count} succeeded, {failure_count} failed")
    print("=" * 60)
    
    if success_count > 0:
        print("\nGenerated files:")
        for jpg_file in sorted(output_dir.glob("*.jpg")):
            if jpg_file.name != ".gitkeep":
                size = jpg_file.stat().st_size
                expected = EXPECTED_SIZES.get(jpg_file.name, "?")
                status = "✓" if size == expected else "✗"
                print(f"  {status} {jpg_file.name}: {size} bytes (expected {expected})")
    
    return 0 if failure_count == 0 else 1

if __name__ == "__main__":
    exit(main())

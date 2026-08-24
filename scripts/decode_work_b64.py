#!/usr/bin/env python3
"""
Decode base64-encoded work assets to JPEG files.

Usage:
  python scripts/decode_work_b64.py
  
This script reads *.jpg.b64 files from apps/agency-site/public/work/
and writes the decoded JPEG files to the same directory.
"""

import base64
from pathlib import Path

# Expected file sizes (in bytes) for validation
EXPECTED_SIZES = {
    "foster-the-city-still.jpg": 55375,
    "foster-the-city-still-02.jpg": 59452,
    "cornerstone-clip-miracles.jpg": 69399,
    "cornerstone-site-about.jpg": 78439,
    "cornerstone-clip-01.jpg": 100856,
    "cornerstone-site-home.jpg": 107017,
    "cornerstone-site-sermons.jpg": 130515,
}

def write_jpg(name: str, b64: str, expected: int):
    """Decode base64 string and write as JPEG file with validation."""
    data = base64.b64decode(b64)
    assert len(data) == expected, f"{name}: got {len(data)} bytes, expected {expected}"
    assert data[:2] == b"\xff\xd8", f"{name}: invalid JPEG magic number"
    
    path = Path("apps/agency-site/public/work") / name
    path.write_bytes(data)
    
    actual_size = path.stat().st_size
    print(f"✓ {name}: {actual_size} bytes")
    return actual_size

def main():
    work_dir = Path("apps/agency-site/public/work")
    
    if not work_dir.exists():
        print(f"Error: {work_dir} does not exist")
        return 1
    
    # Find all .b64 files
    b64_files = list(work_dir.glob("*.jpg.b64"))
    
    if not b64_files:
        print("No *.jpg.b64 files found in apps/agency-site/public/work/")
        print("\nExpected files:")
        for name in EXPECTED_SIZES.keys():
            print(f"  - {name}.b64")
        return 1
    
    print(f"Found {len(b64_files)} base64 file(s) to decode\n")
    
    decoded_count = 0
    for b64_file in sorted(b64_files):
        jpg_name = b64_file.stem  # removes .b64 extension
        
        if jpg_name not in EXPECTED_SIZES:
            print(f"⚠ Skipping {b64_file.name}: not in expected files list")
            continue
        
        try:
            # Read base64 content
            b64_content = b64_file.read_text().strip()
            
            # Decode and write
            expected_size = EXPECTED_SIZES[jpg_name]
            write_jpg(jpg_name, b64_content, expected_size)
            decoded_count += 1
            
        except Exception as e:
            print(f"✗ Error decoding {jpg_name}: {e}")
    
    print(f"\n{decoded_count} file(s) successfully decoded")
    
    # Report missing files
    decoded_names = {f.stem for f in b64_files}
    missing = set(EXPECTED_SIZES.keys()) - decoded_names
    if missing:
        print(f"\nMissing {len(missing)} file(s):")
        for name in sorted(missing):
            print(f"  - {name}.b64")
    
    return 0

if __name__ == "__main__":
    exit(main())

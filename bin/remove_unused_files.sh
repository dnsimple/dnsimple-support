#!/usr/bin/env bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default to dry-run mode
DRY_RUN=true

# Parse arguments
if [ "$1" == "--delete" ]; then
  DRY_RUN=false
  echo -e "${YELLOW}Running in DELETE mode${NC}"
else
  echo -e "${GREEN}Running in DRY-RUN mode (use --delete to actually remove files)${NC}"
fi

echo ""

# Get the root directory of the project
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

FILES_DIR="$PROJECT_ROOT/content/files"
ARTICLES_DIR="$PROJECT_ROOT/content/articles"

# Check if directories exist
if [ ! -d "$FILES_DIR" ]; then
  echo -e "${RED}Error: $FILES_DIR does not exist${NC}"
  exit 1
fi

if [ ! -d "$ARTICLES_DIR" ]; then
  echo -e "${RED}Error: $ARTICLES_DIR does not exist${NC}"
  exit 1
fi

# Counter for statistics
total_files=0
unused_files=0

echo "Building list of referenced files..."

# Build a list of all referenced filenames from articles (scan articles once)
# This is much faster than checking each file individually
referenced_files=$(mktemp)
trap "rm -f $referenced_files" EXIT

# Extract all potential file references from markdown files
# Look for files referenced in markdown links and images: ](filename) or ](/files/filename)
# This handles filenames with spaces, special chars, etc.
grep -roP '\]\([^)]*?([^/)]+\.(png|jpg|jpeg|gif|svg|pdf|mp4|webm|zip|txt|json|xml|csv|docx|doc))\)' "$ARTICLES_DIR"/*.md 2>/dev/null | \
  sed 's/.*](\([^)]*\))/\1/' | \
  sed 's/.*\///' | \
  sort -u > "$referenced_files" || true

# If Perl regex didn't work (macOS), fall back to simpler approach
if [ ! -s "$referenced_files" ]; then
  # Extract filenames from markdown link patterns: ](...)
  grep -roh '\]\([^)]\+\)' "$ARTICLES_DIR"/*.md 2>/dev/null | \
    sed 's/](\(.*\))/\1/' | \
    grep -E '\.(png|jpg|jpeg|gif|svg|pdf|mp4|webm|zip|txt|json|xml|csv|docx|doc)$' | \
    sed 's/.*\///' | \
    sort -u > "$referenced_files" || true
fi

echo "Checking for unused files..."

# Now check each file in content/files against the referenced list
while IFS= read -r -d '' file; do
  ((total_files++))

  # Get just the filename
  filename=$(basename "$file")

  # Check if this filename appears in our referenced files list
  if ! grep -qxF "$filename" "$referenced_files"; then
    ((unused_files++))

    if [ "$DRY_RUN" = true ]; then
      echo -e "${YELLOW}[DRY-RUN] Would delete:${NC} $filename"
    else
      echo -e "${RED}Deleting:${NC} $filename"
      rm "$file"
    fi
  fi
done < <(find "$FILES_DIR" -type f -print0) || true

# Check for missing files (referenced but don't exist)
echo ""
echo "Checking for missing files (referenced but not found in content/files)..."
missing_files=0

# Build a list of actual filenames in content/files
actual_files=$(mktemp)
trap "rm -f $referenced_files $actual_files" EXIT

find "$FILES_DIR" -type f -exec basename {} \; | sort -u > "$actual_files"

# Check each referenced file to see if it exists
while IFS= read -r filename; do
  if ! grep -qxF "$filename" "$actual_files"; then
    ((missing_files++))
    echo -e "${RED}Missing file:${NC} $filename (referenced in articles but not found in content/files)"
  fi
done < "$referenced_files" || true

# Print summary
echo ""
echo "================================"
echo "Summary:"
echo "  Total files in content/files: $total_files"
echo "  Unused files: $unused_files"
echo "  Referenced files: $((total_files - unused_files))"
echo "  Missing files (broken references): $missing_files"

if [ "$DRY_RUN" = true ] && [ "$unused_files" -gt 0 ]; then
  echo ""
  echo -e "${GREEN}To actually delete unused files, run:${NC}"
  echo "  $0 --delete"
fi

if [ "$missing_files" -gt 0 ]; then
  echo ""
  echo -e "${YELLOW}Warning: Found $missing_files broken file reference(s) in articles${NC}"
fi

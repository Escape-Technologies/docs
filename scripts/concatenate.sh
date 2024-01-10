#!/bin/zsh

# Set the search directory to the current working directory
SEARCH_DIR=$(pwd)
OUTPUT_FILE="combined.mdx"

# Check if the output file already exists and delete it if it does
if [[ -f $OUTPUT_FILE ]]; then
    rm $OUTPUT_FILE
fi

# Find all .md and .mdx files in the directory and concatenate them into one .mdx file
find $SEARCH_DIR -type f \( -name "*.md" -o -name "*.mdx" \) -exec cat {} + >> $OUTPUT_FILE

echo "All .md and .mdx files have been concatenated into $OUTPUT_FILE"

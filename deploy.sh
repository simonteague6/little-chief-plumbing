#!/bin/bash
set -euo pipefail

# =============================================================================
# deploy.sh — Little Chief Plumbing Demo Site
#
# Syncs the site/ directory to S3 and invalidates CloudFront cache.
# ONLY files inside site/ are ever uploaded. Everything else in this repo
# (contracts, design docs, dev tools) is ignored automatically.
#
# Usage:
#   ./deploy.sh
#
# Requirements:
#   - AWS CLI with 'stsites' profile configured (aws configure --profile stsites)
#   - site/ directory exists
# =============================================================================

# --- Config ---
BUCKET="demo.simonteague.xyz"
DISTRIBUTION_ID="E30Y4YP97Y6WCS"

echo "================================================"
echo "Deploying Little Chief Plumbing → s3://${BUCKET}"
echo "================================================"

if [[ ! -d "site" ]]; then
  echo "Error: No site/ directory found in $(pwd)"
  exit 1
fi

# --- 1. Assets with long-term cache (CSS, JS, images, fonts, SVG, ICO) ---
echo "[1/3] Uploading assets (1-year cache)..."
aws s3 sync site/ "s3://${BUCKET}/" \
  --profile stsites \
  --delete \
  --cache-control "max-age=31536000,immutable" \
  --exclude "*" \
  --include "*.css" \
  --include "*.js" \
  --include "*.png" \
  --include "*.jpg" \
  --include "*.jpeg" \
  --include "*.gif" \
  --include "*.svg" \
  --include "*.webp" \
  --include "*.woff2" \
  --include "*.woff" \
  --include "*.ttf" \
  --include "*.eot" \
  --include "*.ico"

# --- 2. HTML & text files with short cache (5 min at CloudFront edge) ---
echo "[2/3] Uploading HTML/text (no browser cache, 5-min edge cache)..."
aws s3 sync site/ "s3://${BUCKET}/" \
  --profile stsites \
  --delete \
  --cache-control "max-age=0,s-maxage=300" \
  --exclude "*" \
  --include "*.html" \
  --include "*.txt" \
  --include "*.xml"

# --- 3. CloudFront invalidation ---
echo "[3/3] Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --profile stsites \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" >/dev/null

echo "Done. Invalidation triggered."
echo "================================================"
echo "Live at: https://${BUCKET}"
echo "================================================"

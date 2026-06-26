#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building Halifax Shore Excursions..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo "Done. Check https://halifaxshoreexcursions.com/ shortly."

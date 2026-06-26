#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building Halifax Shore Excursions..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo ""
echo "Done. If halifaxshoreexcursions.com still shows 404:"
echo "  Workers & Pages → halifax-shore-excursions → Settings → Domains"
echo "  → Add halifaxshoreexcursions.com and www.halifaxshoreexcursions.com"
echo "  (Remove those domains from any other Pages/Worker project first.)"

name: Upload to IPFS

on:
push:
branches: [ main ]

jobs:
build:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v2 - uses: actions/setup-node@v1
with:
node-version: 16 - run: npm ci - run: npm run build && npm run export
with:
APP_DIR: 'false' - uses: aquiladev/ipfs-action@master
with:
path: ./out
service: pinata
pinataKey: ${{ secrets.PINATA_API_KEY }}
pinataSecret: ${{ secrets.PINATA_SECRET_KEY }}

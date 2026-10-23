# Credential Holder Directory

A small React directory for browsing sample cloud credential holders. Search by name, combine credential filters, sort by name, and page through the results.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

## Checks

```sh
npm test
npm run build
```

`npm run build` writes a production site to `dist/`. Firebase Hosting is configured to serve that folder.

## Data

Profiles in `src/data.js` are sample records stored in the browser bundle. There is no account system or live certification verification. Replace the sample array with an approved data source before using this as a real member directory.

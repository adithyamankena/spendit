SPENDIT V12 — TITLE SEPARATION ONLY

Based on the verified SpendIt v11 working version.

Requested change only:
- Separate the SpendIt branding/header from the "Your Data" dashboard section title.
- Give the dashboard title its own clear visual spacing/area.
- Keep the existing v11 sync/database/authentication/transaction behavior unchanged.

Do not run the SQL again. The v11 database setup is already complete.

Upload/replace only:
index.html
manifest.webmanifest
sw.js
icon-192.png
icon-512.png

After GitHub Pages deploys:
- Laptop: Ctrl+Shift+R
- Android: close and reopen SpendIt

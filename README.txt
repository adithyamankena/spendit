SPENDIT STANDALONE PWA — GITHUB PAGES

Replace these files in the ROOT of the GitHub repository:
index.html
manifest.webmanifest
sw.js
icon-192.png
icon-512.png

The manifest uses:
id: /spendit/
start_url: /spendit/
scope: /spendit/
display: standalone

This keeps the PWA identity stable and launches it as a standalone app rather than a normal Chrome tab.

After uploading:
1. Commit the changes and wait for GitHub Pages to deploy.
2. On Android, uninstall the currently installed SpendIt app.
3. Open https://adithyamankena.github.io/spendit/ in Chrome.
4. Sign in.
5. Tap Chrome menu -> Install.
6. Open SpendIt from the new app icon.

Do not change Supabase settings.

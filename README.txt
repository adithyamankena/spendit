SPENDIT PWA — FIXED GITHUB PAGES VERSION

Upload/replace these files in the ROOT of the GitHub repository:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

Important:
The manifest start_url is ./ (the GitHub Pages site root), and the service worker
now caches ./index.html. This fixes the Android installed-app 404 caused by the
previous package pointing to SpendIt.html.

After committing the files:
1. Wait for GitHub Pages to deploy.
2. Open https://adithyamankena.github.io/spendit/ in Chrome.
3. If the old installed SpendIt app is still present, uninstall/remove it.
4. Clear the site's data if Chrome still remembers the old PWA.
5. Re-open the URL and choose Install app / Add to Home screen again.

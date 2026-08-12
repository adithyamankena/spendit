SPENDIT V11 — PERMANENT SYNC FIX

ROOT CAUSE FIX:
Previous versions stored dashboard totals in Supabase Auth user metadata.
That was the weak point for reliable cross-device synchronization.

V11 stores dashboard totals in a dedicated public.dashboard_totals table
protected by RLS and uses a Postgres trigger on transactions INSERT.

BEFORE USING V11:
Run SpendIt_v11_Supabase_SQL.sql once in Supabase SQL Editor.

WHAT THE TRIGGER DOES:
- New income transaction -> increases Total Income.
- New expense transaction -> increases Total Spending.
- It does NOT reduce the main tiles if a transaction is deleted.
- Transactions themselves remain in the existing transactions table.
- No existing transaction is deleted or modified by this SQL.

V11 UI remains exactly as v10:
- Goals, Rules, Budgets, Recurring, Subscriptions, Documents removed.
- Edit/Delete buttons removed.
- SpendIt professional branding retained.
- Existing authentication retained.

UPLOAD/REPLACE THESE 5 GITHUB FILES:
index.html
manifest.webmanifest
sw.js
icon-192.png
icon-512.png

THEN:
1. Run the SQL file once in Supabase SQL Editor.
2. Commit the 5 website files to GitHub.
3. Wait for GitHub Pages deployment.
4. Laptop: Ctrl+Shift+R.
5. Android: completely close and reopen SpendIt.
6. Test laptop -> Android and Android -> laptop.

IMPORTANT:
Do not run the SQL more than once if it already completed successfully.
Do not delete the existing transactions table.
Do not change the existing transactions RLS policies.

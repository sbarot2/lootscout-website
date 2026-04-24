# LootScout — Feature guide & how to use

**Last updated:** 2026-04-07  
**Product:** LootScout mobile app (React Native / Expo). Some features need a **development build** (not Expo Go), especially **card scanning** and full camera/OCR.

This guide is for **beta testers**, **support**, and **internal teams**. Technical deep-dives also live in `docs/features-*.md` and `CLAUDE.md`.

---

## 1. Account & basics

1. **Sign up / sign in** with email (Supabase Auth). Confirm email if your project requires it.
2. **Tabs** (typical layout): **Home**, **Collection**, **Profile** — plus any beta routes your build exposes (e.g. **Scanner**, **Shop**, **Pickup**).
3. **Pull to refresh** on supported screens reloads server-backed data (portfolio, listings, etc.).

---

## 2. Home tab

### Portfolio

- The **portfolio** area shows collection value and gain/loss (scope may follow folder filters depending on build).
- **Pull to refresh** updates figures.

### Product search (catalog)

1. Choose **category** / **subcategory** as needed (e.g. trading cards, video games).
2. **While typing:** search is **database/catalog only** (fast, no live TCG API on every keystroke).
3. **Submit** (Search / Enter): runs **hybrid** search — may call external APIs when appropriate (e.g. low DB hit count, TCG paths), then merges and caches results.
4. Tap a **result** to open the **product** screen or a detail sheet (per build).

### Listings search

1. Switch to **listings** mode if available.
2. Enter keywords; multi-token search matches across title / variant / set fields where indexed.
3. Use **filters** when present (price, condition, distance, etc.). **Distance** may require location permission; listings without coordinates may be hidden when a radius is set.

### Other home elements

- **Recent activity** (e.g. adds / sales) when enabled.
- **Map** placeholder or native map depending on build and permissions.

---

## 3. Product page

1. Open from **search** or **scanner** match.
2. Choose **RAW vs GRADED** (trading cards) or category-specific condition UI (e.g. video games: Loose / CIB / New / …).
3. View **price** blocks, **trends / sparkline** when data exists.
4. **Add to collection:** opens the add sheet with prefilled catalog data; pick **condition**, **variant/printing**, **folder**, optional **purchase price**, then save.
5. If you already own the item, use **quantity** controls and **sell** flows as offered.

---

## 4. Collection

### Add an item

1. Open **Collection** → **Add** (or equivalent).
2. **Image lookup** (Pokémon / Magic): snap or pick image where supported, or **search by name**.
3. Pick **condition** (and **graded** options when the category supports slabs).
4. Optional: **purchase price**, **folder**, **notes** (if enabled).
5. **Save** to your collection.

### Organization

- **Folders:** assign items to folders; filter portfolio by folder on Home when supported.

### CSV import (when enabled)

**You don’t have to start over:** bring a spreadsheet from another platform and map it into LootScout instead of retyping your whole collection.

1. Use **import CSV** from Collection (exact entry depends on build).
2. Map columns; preview may show skeleton rows while rows are matched to the catalog.
3. Confirm **bulk import**; resolve duplicates per app messaging.

### List for sale

1. Open a **collection item** → **Post for sale** / **Sell**.
2. Listing is prefilled from collection **condition**, **variant**, and catalog links.
3. **Fixed price** vs **offer-only** listing types where supported.

---

## 5. Card scanner

**Requires:** Physical **iOS or Android** device with a **dev client** or store build that includes **camera + on-device OCR** (`expo-text-extractor`). **Web** builds show a “scanner not available” style message.

### Open the scanner

Use the app entry your build provides (e.g. **Scanner** tab, button from Home/Profile, or deep link **`/scanner`**).

### Single mode

1. Toggle **Single** (vs Batch).
2. **Point the camera** at the card; keep text in frame. Tap the preview to **focus** (Android behavior may differ from iOS).
3. When a match is found, a **sheet** opens with the best match and up to **five** alternates.
4. Tap an alternate to select it, or **Change match** for a **longer scrollable list** of catalog matches.
5. **Manual search:** opens full-screen search — **type at least 3 characters**; results update from the **local catalog** as you type. **Tap Search or press Enter** to run **external APIs only if** the catalog returned **no** rows for that query.
6. **Add to collection** opens the same add sheet as elsewhere; scroll to the bottom if the primary button sits near the home indicator.
7. **Wrong card** / dismiss returns to live scanning.

### Batch mode

1. Toggle **Batch**.
2. Scan cards in sequence; each accepted scan appears as a **thumbnail** along the bottom.
3. **Tap a thumbnail** to **change the catalog match** (horizontal picker for a short list) or **Manual search** (same rules as single mode).
4. Tap the **X** on a thumbnail to **remove** that scan from the batch.
5. Tap the **cyan search (+)** button (lower left) to **add a card by manual search** without scanning (row appears in the batch).
6. Tap **Review (N)** when done — opens **`/scanner/review`**.

### Batch review screen

1. For each row: set **condition** (includes **graded** grades such as PSA 10 when listed), **printing/variant** when variants exist, and **folder** (default folder at top; per-row override).
2. After condition + variant, an **approximate price** line may appear when `product_prices` has a usable row.
3. **Tap the row image** to change the match or run **manual search** for that row.
4. **Trash** removes the row from the batch.
5. **Add all to collection** saves every row (respecting limits and errors per item).

### Tips

- **Lighting** and **distance** strongly affect OCR; try brighter light or moving closer if the app keeps scanning without a match.
- **Torch** toggle is on the scanner chrome when available.

---

## 6. Listings & selling

1. **Create listing** from collection or listing flows.
2. **Fixed** vs **offer** listing types; **auto_price** may track catalog prices until you manually change the price (then auto may turn off — see `CLAUDE.md`).
3. **Edit listing** from profile or listing detail.
4. **Record sale** / **sale confirmation** flows for in-person deals where implemented.

---

## 7. Shops, trades & pickup cart

Summarized in **`docs/features-kiosk-shop-pickup-cart.md`**.

**High level:**

- **Shop-scoped pickup cart** persisted on device; **Pickup** hub and **checkout** routes.
- **Kiosk** tablet flow with QR listings.
- **Trade / sale drafts:** scan **listing QR** to append lines where enabled.

Follow that document for routes (`/pickup`, `/kiosk`, etc.) and QR deep link shapes.

---

## 8. Profile & subscription

1. **Profile** shows your public info, shop entry points, usage, and settings links (per build).
2. **Subscription / billing** may open Stripe customer portal from Edge Functions.
3. **Usage limits** (e.g. active listings) refresh on focus in supported builds.

---

## 9. AI & analytics (where enabled)

- **Price trend** hints, **market opportunities**, **portfolio analytics** on Collection/Home — see `lib/ai/*` in the repo.
- Optional **Claude-powered** copy when API keys are configured.

---

## 10. Related documentation

| Doc | Contents |
|-----|----------|
| `CLAUDE.md` | Current sprint, architecture, file pointers |
| `docs/INDEX.md` | Doc index and “recently completed” |
| `docs/features-card-scanner.md` | Scanner implementation notes |
| `docs/features-kiosk-shop-pickup-cart.md` | Pickup cart, kiosk, listing QR |
| `docs/superpowers/plans/` | Historical implementation plans |

---

## Revision history

| Date | Change |
|------|--------|
| 2026-04-07 | Initial consolidated guide; Card scanner section from shipped batch/single/manual-search UX. |

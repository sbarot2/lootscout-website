# LootScout — Feature guide & how to use

**Last updated:** 2026-11-13  
**Product:** LootScout app (React Native / Expo) — iOS, Android, and the browser at **app.lootscout.io**. Camera **card scanning** needs a native store build (not Expo Go); on a computer the **Scan Station** takes its place.

> **Keep in sync:** the website (`lootscout-website/app/features/page.tsx`, `app/page.tsx` feature cards, `app/faq/page.tsx`) and the in-app **Help & Features** screen (`lib/help/features.ts`) describe the same features. Change them together.

This guide is for **beta testers**, **support**, and **internal teams**. Technical deep-dives also live in `docs/features-*.md` and `CLAUDE.md`.

---

## 1. Account & basics

1. **Sign up / sign in** with email (Supabase Auth). Confirm email if your project requires it.
2. **Tabs:** **Home**, **Collection**, **Events**, **Messages**, **Profile** — the **Scanner**, **Shop dashboard**, and **Pickup** screens are reached from inside those tabs.
3. **Pull to refresh** on supported screens reloads server-backed data (portfolio, listings, etc.).
4. **Help & Features:** the **?** in the Home header opens an in-app feature guide plus **Feedback** and **Request a feature** forms that go straight to the team.

### Browse as guest (no account)

1. On the sign-in or sign-up screen, tap **Browse as guest**.
2. Guests get **Home** (product search, listings, map) and **Events** (including vendor maps). Everything is **view-only**.
3. Any action that changes something — add to collection, message, buy, list — routes to **sign in** and returns you to where you were.
4. Guest search is **catalog-only** (no live API lookups).
5. Shared **shop** and **listing** links (and listing QR codes) open for anyone — in the app if installed, otherwise in the browser as a guest.

---

## 2. Home tab

### Portfolio

- The **portfolio** area shows collection value and gain/loss (scope may follow folder filters depending on build).
- **Honest prices:** a copy is valued at the price for **its own condition or grade**. An LP / MP / HP / DMG copy or a slab with no price for that condition shows **No price** on its tile (and **No … price yet** on its detail screen) instead of borrowing the Near Mint price, and adds $0 to totals; the Collection header says how many items are **without a price**.
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
3. View **price** blocks, **trends / sparkline** when data exists. **Sealed** products (booster boxes, ETBs, etc.) carry a market price too.
4. **View eBay sold listings** opens eBay's sold-items search for this item, narrowed to the condition or grade on screen (graded → e.g. "PSA 10"; raw → slabs excluded; video games → loose / CIB / sealed …). The same button is on every **listing** page, fixed to that listing's condition.
5. **Add to collection:** opens the add sheet with prefilled catalog data; pick **condition**, **variant/printing**, **folder**, optional **purchase price**, then save.
6. If you already own the item, use **quantity** controls and **sell** flows as offered, or open **Your Collection** to edit each copy (see *Edit your copies* below).

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
- **Select several:** long-press a tile to enter select mode. **Select all N** in the selection bar picks every item in the current view (active folder, search and filter applied — not the whole account); tap it again to clear. Then **List for sale**, **Move**, **Copy** or **Delete**. Batch list-for-sale skips items already fully listed; items listed at market start with **Keep at market price** on (slabs saved without a grading company and grade start at a fixed price). Items with **no market price for their condition or grade** are not listed at what you paid: before anything is listed a **Set a price** list asks for a price per item (pre-filled with what you paid, which you confirm or change), with **Skip this item** and **Skip all without a price**. Prices you enter stay fixed.

### CSV import (when enabled)

1. Use **import CSV** from Collection (exact entry depends on build).
2. Map columns; preview may show skeleton rows while rows are matched to the catalog.
   - Each row's price is for **its own condition or grade**, read the same way its collection tile will read it. A graded row (from a Grade column such as `PSA 10.0 GEM - MT`, or a condition like `PSA 10` / `BGS 9.5`) shows that slab's price from a source that has graded data, or **No price for PSA 10 yet** — never the raw Near Mint price. A raw LP / MP / HP / DMG row shows that condition's price, or **No … price yet** rather than borrowing Near Mint.
   - Graded rows are saved as slabs (condition `psa-10` plus grading company and grade), the same shape as adding a slab by hand.
   - **Quantity:** each row shows **×N** from the file's quantity column (Collectr `Quantity`, TCGplayer `Quantity` / `Total Quantity`, Deckbox `Count`, or any `Qty`/`Quantity`/`Count` column). A row imports as **one** collection item holding that quantity, not N separate items. Rows that are identical in every column (name, set, number, condition, grade, price paid, notes, folder) are combined into one row at their total quantity and labelled "N identical rows in the file combined"; rows that differ in anything stay separate. Collectr's per-copy notes (exported as `"; ; "` on multi-copy rows) are tidied — empty and repeated fragments dropped. A blank quantity means 1; a row whose quantity is **0** is not imported (in Update inventory, 0 means you own none). The header shows rows **and** cards, and a row of more than one card shows the unit price and the line total (`$520.00 ea · $1,560.00 for 3`).
   - **Fix a row before importing:** tap a row to change its **condition**, switch it to **graded** (company + grade), or change its **quantity** (1–9999), alongside re-matching and notes. The price updates for the new condition or grade, the row is marked **Edited**, and **Use the file's condition & quantity** puts it back. What you set is what gets imported and listed.
   - **Printing:** the editor also lists the printings the matched product really has (Normal, Holofoil, Reverse Holofoil, 1st Edition…) and starts on the file's printing (or the one the preview priced). Changing it re-prices the row and is what gets imported and listed; a product with one printing shows it read-only. An alt-art, stamped, promo or jumbo version is a **different product** — use **Find different match** for those.
   - **Check this match:** rows the matcher was unsure of are badged **Check this match** and counted in the header ("N to check"), with a **Show only rows to check** filter. Opening one shows the closest catalog cards (image, set, number, rarity) at the top of the editor — tap the right one and Save. Rows whose lookup failed show **Couldn't check — tap to retry**, which re-runs the match for that row only.
   - **Tap a card image** (on the row, in the editor, or on a candidate) to see it full size.
3. Confirm **bulk import**; resolve duplicates per app messaging.
4. Optional (shop owners): tick **Also list imported items for sale** on the confirm step. One listing is created per card, so a ×3 row becomes three listings (up to your plan's listing allowance). After the rows import, they are listed as fixed-price listings at the condition / grade price shown in the preview, and rows that failed to import are never listed. Items with **no market price** are never listed silently: once the import finishes, a **Set a price** list asks for a price per item (pre-filled with what the file says you paid, which you confirm or change) or **Skip** — the import itself is never held up by this. Listings priced at market start with **Keep at market price** on — slabs included, since the listing carries the grading company and grade and tracks the slab price; prices you enter stay fixed. Without a shop the option is shown disabled with a create-a-shop prompt.

### Edit your copies

1. Open the editor from the **edit (pencil) chip** on a collection tile, beside **Sell**, from **Your Collection** on the product page, or from the collection item page.
2. Every copy is listed **line by line** with its **folder**, variant / condition, and whether it is **listed for sale**.
3. Change a copy's **condition** (graded needs company + grade) or **purchase price**, then **Save this copy**.
4. **Multiple-quantity rows split:** editing one unit of a qty-3 row turns that unit into its own line, so copies bought at different prices or in different conditions stay accurate.
5. Units that back a live listing are **locked** — edit them from the listing.
6. **Condition sync:** editing a listing's condition updates the collection copy behind it, and editing a collection copy's condition updates its active listing. Quantity still lives on the **+/−** stepper.

### Import scans (Scan Station)

**Where:** **Collection → Import scans** — in the browser at **app.lootscout.io**, and on phones too.

1. Drop in scan images (fronts, or fronts and backs) — up to **150** per import. Cards are read on your device; images upload only when you list a card.
2. A **review grid** shows each match: confirm or search for another, set printing and condition (incl. graded), compare **market price** with your price, pick a folder.
3. **Add to collection**, or **add and list for sale** in one pass (listings go out under your shop with the scans attached). Cards listed **at the market price** keep tracking the market (auto-price on); a price you type stays fixed. A card with **no typed price and no market price** is never listed silently: before anything is listed you get a **Set a price** list where you enter a price or **Skip** it (or **Skip all without a price**).
4. **eBay File Exchange / TCGplayer** export of the reviewed batch is plan-gated.

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
2. **Fixed** vs **offer** listing types. On a **fixed-price** listing, the **Keep at market price** switch keeps the price tracking the catalog; those listings show an **“Auto-priced to market”** badge on the listing page. Saving a price you typed yourself turns the switch off. Offer listings never auto-price.
3. **Edit listing** from profile or listing detail — including the **condition** (category-aware; graded needs company + grade). Saving pushes the new condition to the linked collection copy.
4. **MSRP / fixed-price item** switch (sell sheet + edit listing): when on, sales of that listing are **excluded from LootScout market data**, so selling sealed product at retail never drags the market price.
5. **Record sale** / **sale confirmation** flows for in-person deals where implemented.
6. **Delete many listings:** on the **Shop dashboard** tap **Bulk Actions** (or long-press a listing; on your own shop page, long-press a tile). **Select all N** selects every listing shown (on the shop page, the current search and filters); tap again to clear.

### QR labels

1. From your shop, open the QR label printer and **select listings** (all, or tick individual ones).
2. Formats: **US Letter sheet (30 per page)** to cut by hand, or one-per-page thermal presets **2.25 × 1.25 in**, **1.5 × 1 in**, **1 × 1 in** (stacked QR over title).
3. Labels print **QR + title**; tick **Include price** to add the price (off by default).
4. **Save to device** as a PDF, or **export as images** (SVG on phones, PNG in the browser). In the browser you can also print directly.
5. **Listing QR codes are https links** (`https://lootscout.io/listing/{id}`): any phone camera can scan them. With the app installed they open the listing in the app; without it they open the listing in the browser as a guest. Older `lootscout://` labels still scan inside the app.

---

## 7. Events & vendor maps

**Where:** the **Events** tab. Events come from two places — **imported card shows** (nightly US card-show import) and **events added by users**.

### Find a show

1. Events are searched around a **center point**. The tab asks for **location** on open; tap the **Near** row to search a **city or ZIP** (“Charlotte, NC or 90210”) or **use my current location**. If location is denied you get a banner prompting for a city/ZIP instead.
2. **Distance** chips: **5 / 25 / 50 / 100 mi / Any** (default **25 mi**).
3. The **month calendar** puts a dot under every day that has events (multi-day shows dot each day they cover). Tap a day to list that day’s shows; chevrons change month.
4. Rows show venue, date range, and **“3.4 mi away”** when the event has coordinates. **Pull to refresh**.

### Add an event

Any signed-in user can add one via the **Add Event** button.

1. **Event name**, **venue name**, **street / city / state / ZIP** — or tap **Use current location** to prefill the address.
2. **Start** and **End** (end defaults to start + 3 hours).
3. Optional **description** and an optional **venue image** (floor plan or promo).
4. **Create event** opens the new event page.

**Deleting an event is admin-only.** Because anyone can add one, events created by a normal user show this banner on the event page:

> ⚠ **User added event — please confirm validity before attending.**

Imported shows and admin-created events do not show it.

### Event page

- Header: name, date range, venue, **“N attending · N vendors”**, and **Open in Maps** (hands the venue off to your device’s maps app).
- **Attend** toggles your RSVP; **Attend as vendor** opens vendor setup. Switching from vendor back to attendee clears your booth pin and event listings (you’re asked first).
- **Venue maps** gallery, then three tabs: **Vendors**, **Search items**, **Map**.

### Multi-day & recurring shows

Shows with the same **name + venue + state** are treated as one series, split into **occurrences**:

- **Consecutive days are one occurrence.** A Fri/Sat/Sun show **shares vendors, booth pins, and brought listings across all its days** — set up once and you appear on every day of that weekend.
- **A gap of 2+ days starts a new occurrence.** A **weekly recurring** show therefore starts fresh each week: attendance, pins, and listings are per-week.
- **Venue map images are shared across the whole series** — a floor plan uploaded once appears on every date, including future weeks.
- **Booth labels are unique per occurrence.** Two vendors can’t both claim “Table 14” at the same show (you’ll see *“Booth 14 is already claimed by another vendor at this show”*), but the same label is free again at next week’s occurrence. Blank / “TBD” labels are exempt.

### Vendor setup

1. **Attend as vendor** → **Vendor setup**.
2. **Booth label** (e.g. “Table 14, Aisle B-3”) and optional **notes**.
3. **Choose listings to bring** — pick from your **active** listings (search, **Select all** / **Clear**). First-time setup pre-selects all of them.
4. **Place me on the venue map** → **Place your booth**: *“Pinch to zoom in for precision, then tap the floor plan to drop your pin.”* Other vendors’ pins shrink to small **dots** while you place yours. If the event has several maps, pick one from the thumbnail strip first — pins belong to a specific image, so switching maps clears an unsaved pin. **Save pin**.
5. **Save vendor setup**. With no venue map yet, your **booth label still shows** in the Vendors tab.
6. **Move your pin later:** open the **Map** tab and **long-press your own pin**.
7. **Remove vendor setup** takes you off the vendor list and clears your pin and event listings.

### Attendee tools

- **Vendors** tab — every vendor with **“Booth 14”** or **“Booth TBD”**; tap to open their profile.
- **Search items** — one search across everything vendors brought to this show. Each result shows price, vendor, booth, **View listing**, and **Find vendor** (switches to the Map tab and zooms to that booth; a toast tells you when the vendor hasn’t pinned yet). This is **live inventory**: only **active** listings appear, so items sold in the app drop out on the next refresh.
- **Map** tab — tap the map to open the zoom view (*“Pinch to zoom · drag to pan · double-tap to reset”*). Tap any pin to spotlight it — every other pin collapses to a dot — and open that vendor’s items with a **“Search this vendor’s items”** box.
- **Venue maps** — any signed-in user can **+ Add map** (community submissions, no review step), so an event can carry several floor plans or promo images. You can delete **your own** upload. Booth pins are tracked **per image**.

---

## 8. Shops, trades & pickup cart

Summarized in **`docs/features-kiosk-shop-pickup-cart.md`**.

**High level:**

- **Shop-scoped pickup cart** persisted on device; **Pickup** hub and **checkout** routes.
- **Kiosk** tablet flow with QR listings.
- **Trade / sale drafts:** scan **listing QR** to append lines where enabled.

### Sort and filter a shop's inventory

**Who:** anyone viewing a shop page, signed in or not (including the owner). **Where:** the **Sort** and **Filter** buttons beside the **Listings** heading.

1. **Sort** cycles: newest first (default) → price low to high → price high to low → back to newest. It sorts by the price shown on each tile (the live market price for "Keep at market price" listings). **Make an offer** listings always go last.
2. **Filter** opens a sheet with only the options this shop actually stocks, each with a count: **Category / game** (Pokemon, One Piece, Sports cards, Video games, …), **Sealed only**, **Raw / graded**, **Condition** (NM/LP/MP/HP/DMG), and a **price range** (a range hides offer-only listings). Tap **Show N listings** to apply; the **Filter** button shows how many filters are on. **Clear** resets them; if nothing matches, the grid offers **Clear filters**.
3. Sort and filter work together with the search box. On your own shop, **Select all** selects only the listings currently shown.

### Shop QR sign

**Who:** shop owners. **Where:** the **Shop dashboard** (beside Kiosk Mode) or the **QR** button left of **Share** on your own shop page.

1. The sheet shows a scannable preview of the sign (scan your own screen to check it).
2. **Save** or **Share** a print-ready **5 × 5 in** sign — QR code, your shop name, and “Scan to browse our inventory on LootScout” (PNG when saved from the browser).
3. The QR is your shop's https link: it opens in the app when installed, otherwise in the browser as a guest.

### Scan cards into a trade or trade-in

1. On a **trade-in** or **trade** draft, tap **Scan cards** (phone camera; native app only).
2. **Trade-in:** each scanned card becomes a catalog line priced the same way as picking it from the catalog; cards with no price are skipped and named so you can add them by hand. In **single** scan mode the match sheet has a **condition** picker (raw list, plus a **Graded slab** switch with company + grade; a detected slab is preselected) and shows the market value for that condition before **Add to trade-in**. In **batch** mode, set condition per row on the review screen.
3. **Trade:** each scan looks for that card in **your own collection** — one copy is added straight away, several open a chooser, none shows a clear message. Copies already reserved on the draft are respected.

### Vendor show mode

**Who:** **Shop plan and above** to *start* a show. Ending a running show and reading its summary are not gated, so a plan that lapses mid-show can still close out.

1. **Start** from the **Shop dashboard** (“Start a show”) or an **event page** (“Start show mode here”). The event-page control appears on every upcoming or in-progress event; it can be started from **the day before the event** through the event's last day (multi-day shows count as one), and shows that reason, greyed out, before then. When your running show is linked to the event, the page shows **Show running here — View / End**. Pick one of today's events or name the show, and optionally enter a **spending budget** and **starting cash in the box**.
2. While the show is live, a **show bar** stays on screen, and every **sale, trade-in, and trade** you complete is **tagged to the show automatically** (pickup requests are counted as demand, not sales).
3. **Budget warnings:** when paying for a deal would take you over budget, the draft shows a warning. It never blocks the deal.
4. **Retag:** any transaction can be moved to another show or removed from one — only your own records change; the other party never sees it.
5. **End show** (or it ends automatically after the event / after inactivity) and open the **summary**: sales (gross, discounts, cash vs card, refunds, net, est. card fees), buys and trades (trade-ins, trades, purchases, paid out in cash / by card), **cash box** (cash in, cash out, net, and **expected in the box** when you entered starting cash), **items out** (market value, plus your cost and margin where cost is known), **items in** (market value, amount paid), top items, open deals, pickup requests, and listings brought.

Follow that document for routes (`/pickup`, `/kiosk`, etc.) and QR deep link shapes.

### Walk-in trade-in (any shop)

**Who:** Any user who owns a shop can run a **walk-in trade-in** — the flow is open to **all shops** (no subscription tier gate on starting one).

1. From the **Shop dashboard** or **Profile → Shop**, start a **trade-in** (walk-in / point-of-sale).
2. **Search the catalog** for the customer's item — any category, not just cards. Add items **line by line**.
3. For **graded** items, pick the **grading company** — PSA, BGS, CGC, SGC, and the newer **ACE / TAG** — and the **grade**, including **half grades** (e.g. 9.5, 8.5).
4. Set an **agreed price per line** — the number you and the customer settle on. The catalog price is a reference; you can override it (or type a manual estimate when the catalog has no price).
5. Complete the trade-in — accepted items are **filed automatically into a receiving folder** in your inventory.
6. Settle any **remainder** in cash (the default) or by card — see below.

### Tap to Pay — in-person card payments (Android, and Tap to Pay on iPhone)

**Requires:** an **NFC-capable Android phone**, or an iPhone using **Tap to Pay on iPhone**, on a store build (not Expo Go). **No card-reader hardware needed** — the phone is the terminal. (iOS copy must always use the full name **Tap to Pay on iPhone**.)

**One-time seller setup:**
1. Open **Profile** (or **Shop**) → the **Tap to Pay / payments** entry.
2. **Connect Stripe** (Stripe Connect). You are onboarded as the merchant, so **payouts go directly to you — LootScout never holds your funds.**
3. A **shop address is required** to provision your in-person payment location; add it in shop settings if prompted.

**Taking a payment (seller):**
1. Available on a **POS sale**, a **trade-in cash remainder**, or a **peer-trade cash difference** — choose **charge card (Tap to Pay)**.
2. Review the **fee breakdown** shown in-app: the charge, LootScout's **3% platform fee**, **Stripe's card-processing fee**, and your net are itemized **before** you charge. Fees are **seller-side only — the buyer is never charged a surcharge.** (Marketing accuracy: 3% is the *platform* fee, not the total — card processing also applies and shows in the same breakdown.)
3. The buyer **taps a contactless card or phone** to your device.
4. On approval the payment settles; for a trade, **settlement is instant** — inventory transfers on the spot.

**Buyer experience:** tap a contactless card or phone to the seller's device, exactly like any contactless terminal. No app or account required to pay.

**Refunds:** the seller who took the payment can issue a **full in-app refund** on any completed card-paid transaction — from the transaction itself (**Refund payment**, which is how walk-in sales with no counterparty are handled) or from the dispute screen. Refunds are full-amount and can’t be undone.

---

## 9. Profile & subscription

1. **Profile** shows your public info, shop entry points, usage, and settings links (per build).
2. **Subscription / billing** may open Stripe customer portal from Edge Functions.
3. **Usage limits** (e.g. active listings) refresh on focus in supported builds.

### Plans (usage-based — updated 2026-11-13)

Every feature works on every plan. Plans differ by **how much** you can do each month; the Shop
plans also add the shop tools (in-person POS sales, vendor show tools, transaction and
eBay / TCGplayer exports). Prices and plan features may change.

| | Free | Collector | Shop | Enterprise |
|---|---|---|---|---|
| Price | $0 | $14.99/mo | $29/mo | $99/mo |
| Active listings | 5 | 50 | 150 | Unlimited |
| Peer trades / month | 5 | 10 | 20 | Unlimited |
| CSV imports / month | 2 | 5 | 10 | Unlimited |
| Exports / month (collection, transaction, eBay / TCGplayer) | 2 | 5 | 10 | Unlimited |
| Photo-upload scans / month (Scan Station, photo library) | 10 | 100 | 10,000 | Unlimited |
| Live camera card scanning | Unlimited | Unlimited | Unlimited | Unlimited |
| Price alerts | Unlimited | Unlimited | Unlimited | Unlimited |
| Catalog search | Unlimited | Unlimited | Unlimited | Unlimited |
| AI price insights | — | ✓ | ✓ | ✓ |
| In-person POS sales | — | — | ✓ | ✓ |
| Vendor show tools | — | — | ✓ | ✓ |
| Transaction + eBay / TCGplayer export | — | — | ✓ | ✓ |
| Custom default buy / trade-in % | — | — | — | ✓ (with 100+ active listings) |

- **Monthly limits reset on the 1st** (UTC). Your plan card on **Profile** shows what's left this month; the CSV import sheet and Scan Station show their own counts.
- **At a limit** the app shows **Upgrade** (on iPhone this goes through the App Store).
- **Free intro access:** new accounts get Enterprise free for their first 30 days.
- **Photo-upload scans** count each card once (a front + back pair is one scan). Scanning with the live camera is never counted.

---

## 10. AI & analytics (where enabled)

- **Price trend** hints, **market opportunities**, **portfolio analytics** on Collection/Home — see `lib/ai/*` in the repo.
- Optional **Claude-powered** copy when API keys are configured.

---

## 11. Related documentation

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
| 2026-11-13 | Caught up with Oct–Nov shipping: **Browse as guest**, **Help & Features** screen + feedback forms, **eBay sold** button (product + listing), sealed prices, **Edit your copies** (per-unit split + listing↔collection condition sync), CSV **also list for sale**, **Import scans / Scan Station** (market-priced listings auto-track), **MSRP / fixed-price** switch, **QR labels** (selection, 30/page sheet, 1×1 preset, optional price, save as PDF / images, https QR links), **Shop QR sign**, **Scan cards into a trade / trade-in**, **Vendor show mode**. Corrected: Tap to Pay is live on iOS as **Tap to Pay on iPhone** (was "coming later"); tab list no longer calls Scanner/Shop/Pickup "beta routes". Plans/pricing section deliberately untouched (pricing overhaul in progress). |
| 2026-08-04 | Added **Events & vendor maps** (radius + calendar discovery, imported vs user-added events with validity disclaimer, attend / attend-as-vendor, booth labels and pins on community venue maps, event-wide live item search, multi-day vs weekly-recurring sharing rules). Corrected: tab list now includes Events + Messages; auto-pricing described as the **Keep at market price** switch with the **Auto-priced to market** badge; refunds described as payee-issued full refunds on any completed card-paid transaction (not dispute-only). |
| 2026-07-26 | Added **Tap to Pay** (Android in-person card payments, no reader hardware, direct Stripe Connect payouts, 3% platform fee with in-app breakdown, optional buyer fee pass-through, in-app refunds) and **walk-in trade-in for all shops** (catalog search, any grading company incl. ACE/TAG + half grades, per-line agreed pricing, auto folder filing, instant settlement on card tap). iOS Tap to Pay noted as coming later. |

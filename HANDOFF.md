# Roadgun Mobile Repair: SEO build handoff (Sep 18, 2026)

Goal: top 3 for "mobile mechanic jacksonville nc", page one for service and town variants, and measurable call clicks.

**Baseline to beat**
- "mobile mechanic jacksonville nc": position 7.5 (90 days to Sep 16)
- Site: 17 clicks, 351 impressions, 4.8% CTR, avg position 5.5 (28 days, Aug 20 to Sep 16)
- GBP: 7 calls in 6 months (Apr to Sep)

## What changed

- **Hero:** the H1 is now "Mobile Mechanic in Jacksonville, NC". The 4.3 MB background video is gone. `hero-poster.jpg` was rebuilt at 1600x900 (70 KB) from the source footage, because the old file was only 387x218. The call button is the primary CTA and sits above the fold at 375 px.
- **Metadata:** the homepage title is "Mobile Mechanic in Jacksonville, NC | Roadgun Mobile Repair", and OG and Twitter use the same title. The canonical is `https://roadgunrepairs.com/`. Every page sets its own canonical through `pageMetadata()` in `src/lib/site.ts`.
- **Trailing slashes:** `next.config.ts` now sets `trailingSlash: true`. All internal links, canonicals and sitemap URLs end in `/`.
- **Legal pages:** `/privacy-policy/` and `/terms/` are now `noindex, follow` and are out of the sitemap. This stops them competing with the homepage on brand queries.
- **Schema:** the AutoRepair block keeps `@id` `https://roadgunrepairs.com/#business`. Service pages point to it with `provider`. `areaServed` is shared from `src/lib/site.ts`. The schema has no `aggregateRating`.
- **Reviews:** the reviews now live in `src/lib/reviews.ts`. The 2 existing reviews were kept word for word.
- **Call tracking:** `TrackEvent.tsx` sends a beacon on every `tel:` click and on every contact form submit. It does nothing until the env var below is set.

## Pages created

Services index: `/services/`

| Service page | URL |
|---|---|
| Mobile Diagnostics | `/services/mobile-diagnostics/` |
| Mobile Brake Repair | `/services/brake-repair/` |
| Mobile Battery Replacement | `/services/battery-replacement/` |
| Mobile Starter and Alternator Repair | `/services/starter-alternator-repair/` |
| Mobile Oil Change | `/services/oil-change/` |
| Mobile Belt and Hose Replacement | `/services/belts-hoses/` |
| Mobile Check Engine Light Diagnosis | `/services/check-engine-light/` |
| Mobile Pre-Purchase Inspection | `/services/pre-purchase-inspection/` |
| Mobile Trailer Repair | `/services/trailer-repair/` |

Each service page has 550+ words, 4 FAQs with FAQPage JSON-LD, Service and BreadcrumbList JSON-LD, a call button at the top and bottom, 3 sibling service links and links to the area pages.

Areas index: `/service-areas/`

| Area page | URL | Status |
|---|---|---|
| Jacksonville | `/service-areas/jacksonville-nc/` | live |
| Camp Lejeune | `/service-areas/camp-lejeune-nc/` | live |
| Richlands | `/service-areas/richlands-nc/` | live |
| Swansboro | `/service-areas/swansboro-nc/` | live |
| Hubert | `/service-areas/hubert-nc/` | live |
| Holly Ridge | `/service-areas/holly-ridge-nc/` | live |
| Sneads Ferry | `/service-areas/sneads-ferry-nc/` | **built but noindex, unlinked and not in the sitemap** |

Each area page has 500+ words, one H1, BreadcrumbList JSON-LD, links to all 9 services and call buttons. There is also a custom 404 page.

## GSC actions (property `sc-domain:roadgunrepairs.com`)

1. Resubmit `https://roadgunrepairs.com/sitemap.xml`. It now has 18 URLs.
2. Request indexing, in this order:
   1. `https://roadgunrepairs.com/`
   2. `https://roadgunrepairs.com/services/`
   3. `https://roadgunrepairs.com/service-areas/`
   4. `https://roadgunrepairs.com/service-areas/camp-lejeune-nc/`
   5. `https://roadgunrepairs.com/service-areas/jacksonville-nc/`
   6. Then the service pages, starting with `brake-repair`, `mobile-diagnostics` and `battery-replacement`. Brake and auto repair "near me" queries already show at position 1.
3. Watch `/privacy-policy/`. It should drop out of results over the next few weeks.
4. Check again in 28 days against the baseline above.

## Owner inputs needed (Travis)

- [ ] **Paste the 4 new GBP reviews** into `src/lib/reviews.ts`. Copy them word for word, with first name and month, following the format in the comment at the top of the file. Do not paraphrase.
- [ ] **Confirm Sneads Ferry.** If Travis serves it:
  - set `confirmed: true` for `sneads-ferry-nc` in `src/lib/areas.ts`. That adds it to the sitemap, the areas index, the footer and the service page area lists, and removes the noindex.
  - add `{ name: "Sneads Ferry", href: "/service-areas/sneads-ferry-nc/" }` to `towns` in `src/app/components/ServiceArea.tsx`.
- [ ] **Camp Lejeune base access.** The page says we confirm access before booking a job on base, and meet off base when access isn't possible. If Travis has a standing vendor pass, the copy can say so, which is a stronger selling point. If he never goes aboard, the copy should say "off base only".
- [ ] **Check the service claims** in `src/lib/services.ts` against what Travis actually does. Examples: AGM battery registration, some timing belts, electric and surge trailer brakes, jobs at the dealer lot. Remove anything he doesn't do.
- [ ] **Pricing.** No dollar figures anywhere, by design. If Travis wants to publish starting prices, add them to the `cost` paragraphs.
- [ ] **Hero photo.** The hero is a still from stock footage of a shop. A real photo of Travis working in a driveway would convert better and match "we come to you". Use 1600x900, under 200 KB.
- [ ] **Hero alt text.** The brief asked for "Mobile mechanic working on a truck in Jacksonville, NC", but the image shows a car in a shop. The alt text is "Mobile mechanic working under the hood of a vehicle in Jacksonville, NC". Use the truck wording if the photo is swapped for one of a truck.

## Call and form tracking setup (Ky)

**1. Build the n8n webhook.** Put it on the same n8n instance as `N8N_WEBHOOK_URL`:
- Use a Webhook node, method POST, path `events`. The production URL is `https://<n8n-host>/webhook/events`.
- `navigator.sendBeacon` sends the body as a `text/plain` JSON string. Parse it in a Code or Set node, e.g. `JSON.parse($json.body)`, before using the fields.
- Append each event to a **`site-events`** tab in the Google Sheet, with columns `site`, `page`, `type`, `ts`. `ts` is epoch milliseconds, so add a formatted date column.
- `type` is either `call_click` or `form_submit`. `form_submit` fires on every submit attempt, including ones that fail validation. Count real leads from the existing form webhook.

**2. Set the env var in Cloudflare Pages.** Go to Settings, then Environment variables, then Production (and Preview if wanted):

```
NEXT_PUBLIC_EVENT_WEBHOOK=https://<n8n-host>/webhook/events
```

This is a build-time variable because Next inlines `NEXT_PUBLIC_*`. **Trigger a new deploy after setting it.** Until then, tracking does nothing.

**3. Test it.** Click a call button on the live site. In the browser devtools Network tab, filter by `events`. There should be one `ping` request, and a new row should appear in the sheet.

## Verified before push

- `npx tsc --noEmit` and `npx next build` both clean, with 26 static routes.
- No `<video` anywhere in `out/`. `hero-video.mp4` is deleted.
- Every `out/**/index.html` has exactly one `<h1>`, and it contains "Jacksonville" or the town name. The legal pages and the 404 carry "Jacksonville, NC" in an H1 subline.
- No U+2014 or U+2013 dashes anywhere in `src/`.
- 594 internal links checked. All end in `/` and resolve to a built page.
- Playwright at 375 and 1280 px on `/`, `/services/brake-repair/` and `/service-areas/camp-lejeune-nc/`:
  - the call button is above the fold on mobile on all three;
  - no horizontal overflow.
- Homepage total transfer is about 1.0 MB uncompressed, under the 1.5 MB budget. Most of that is JS and below-fold images.

# UBER STROY — PROJECT STATUS

**As of:** 2026-11-11  
**Current ICP slice:** owner / general contractor  
**Status:** public landing exists; **not production-ready**.

## Confirmed state

| Area | Status |
|---|---|
| Positioning | Defined: «UBER STROY — нужные люди на ваши объекты» |
| Brand | Orange/black industrial; white/silver accents |
| Owner landing | Published at https://fevralsky-rf.github.io/portfolio/uber-stroy/owner/ |
| HTML | `uber-stroy/owner/index.html` |
| Structure | Hero, owner pains, solution, work directions, operating control, process, pilot, downtime calculator, FAQ, lead form |
| Pages deployment | Last checked run #43051519911 succeeded for commit 3f91d3a… |
| Photography | **BLOCKED** — four remote WebP blobs are 7,500 bytes each and their Git blob SHA values do not match the valid local source files |
| Form | Demo-only: copy/download lead card; no webhook and no persistence |
| n8n | Not connected to this landing |
| Legal / personal data | Operator name, privacy notice, consent and production endpoint not supplied/approved |
| Other ICP landings | Not yet built |

## Image integrity blocker

Valid local sources are in `/mnt/data/uber-stroy-owner-landing/assets/`:

| File | Bytes | Dimensions | Expected Git blob SHA |
|---|---:|---:|---|
| owner-hero.webp | 27,232 | 640×360 | `ac6d203f0c545238611b9c4b9fe3011819d20907` |
| owner-problem.webp | 18,134 | 600×444 | `bddab4e55aae25ff0f343d3d0b1ad18dfa83ba12` |
| team-on-site.webp | 27,764 | 640×261 | `9e68ff4d3a44d1b2ae9dc9a758ce05e1b692ab4e` |
| owner-site.webp | 15,020 | 600×498 | `8fa8903287e9b1776c4aae54ac0a000d01cd2bf7` |

Current remote tree reports all four as 7,500 bytes; remote blob IDs differ. The user's desktop screenshot shows an empty image frame. Pages deployment success does not prove that images decode or render.

## Priority

**P0:** replace the four binary assets using valid local files; verify file type, exact byte length, Git blob SHA, HTTP 200 and image/webp content-type; verify actual live rendering on desktop and mobile.

**P1:** after Maxim supplies legal operator/contact details, connect HTTPS n8n webhook, lead CRM/table, UTM attribution, status/owner/next step, deduplication, spam protection and success/error states.

**P2:** build distinct landing variants for foreman, site manager/master, HR/recruitment and brigade leader/worker-house supplier. Supplier funnel is separate from the buyer funnel.

## Release gate

Do not call the site production-ready or send paid traffic as a live lead-capture system until P0 and P1 are closed. Do not promise a conversion rate (including 90%) without real traffic and funnel data.


## 2026-11-18 — Market research commissioned
- User requested a primary-source analysis of Russian construction 2020–2026, outlook to 2030, cohort mapping, public vs commercial demand, national and Nizhny Novgorod SOM, city comparison and Parabellum 5×1 niche selection.
- Research started but is **not complete**. No final SOM, city ranking, full cohort analysis or 2030 model should be represented as delivered.
- Preliminary market indicators and the full remaining scope are documented in `Terra/Handoffs/UBER_STROY_MARKET_RESEARCH_HANDOFF_2026-11-18.md`.
- Existing local workbooks are the starting point; avoid treating overlapping register rows as unique active sites.


## 2026-11-18 — Demand aggregator strategy
- Strategic direction: UBER STROY is being developed as a construction workforce demand aggregator with a managed-marketplace/operator model first; self-service marketplace is a later stage after repeatable paid fulfilment.
- Initial data perimeter: HeadHunter, Avito and the canonical construction-company registry for Nizhny Novgorod and region.
- Entity model: company = account; vacancy/listing = signal; verified buyer need = opportunity. Multiple signals attach to one account; deduplicate reposts and mirrors while retaining source evidence/history.
- Sales funnel: signal discovery → dedupe → company match → demand qualification → buyer qualification → human-approved contact → need confirmation → offer → pilot → fulfilment → outcome.
- No live HH/Avito scanner, production CRM or automated outreach is claimed as implemented. WF-00 remains a synthetic sandbox in the latest private project status.
- Full non-sensitive strategy brief: `uber-stroy/DEMAND-AGGREGATOR-STRATEGY.md`.


## 2026-11-18 — Construction Demand Hunter
- Published file-based skill package: `uber-stroy/skills/construction-demand-hunter/` (v1.0.0, 10 modules).
- Role: operational demand-signal discovery, company resolution, buyer qualification, outreach preparation and funnel conversion intelligence.
- Complements Construction Market Intelligence; does not replace it.
- No live source adapters, CRM automation, bulk outreach or automatic installation are claimed by this documentation release.
- Field validation against real opportunities remains pending.

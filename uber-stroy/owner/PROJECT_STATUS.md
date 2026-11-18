# UBER STROY — PROJECT STATUS

**As of:** 2026-11-18  
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


## 2026-11-18 — Conversion skill architecture

- Added reusable `ICP & Conversion Architect v1.0.0` under `uber-stroy/skills/icp-conversion-architect/`.
- Scope: ICP/buying roles, JTBD, VoC, pain-to-value, offer/messaging, creative briefs, landing architecture, forms, CRO and experiment design.
- It complements Growth Agent v2; it does not replace channel strategy, CRM, sales pipeline or growth economics.
- UBER STROY is its first reference implementation; owner, foreman, site master and HR are separate buyer-side ICPs; brigade lead is a supply-side funnel.
- This skill creation does not change the owner landing's existing photo/form production blockers.


## 2026-11-18 — Construction Market Intelligence v1.0.0

- Created a reusable modular market-intelligence skill: one orchestrator plus 14 specialist modules and four support documents (README, changelog, data dictionary, scoring/governance, prompt library; 20 Markdown files total including the orchestrator and modules).
- Published under `uber-stroy/skills/construction-market-intelligence/`; permanent master skill and supporting files are saved in the personal Library, with a ZIP backup.
- Role: translate source-backed market, project, procurement, labour and buyer signals into qualified commercial opportunities and decisions.
- Complements Growth Agent v2, Construction Demand Hunter and ICP & Conversion Architect; it does not replace them.
- The package is file-based documentation, not an automatically installed runtime skill. Load the orchestrator and relevant modules when invoking it.
- QA status: content, Library persistence, Git persistence and handoff artifacts verified. Local Obsidian vault sync was not directly verified. Effectiveness has not yet been field-tested against a real work package or executed shift.
- Next validation: test one Nizhny Novgorod project and one tender; validate M04 labour demand, M05 actual contribution economics, and M12 legal/HSE gates before treating outputs as operationally proven.



## 2026-11-18 — Vertical Event Intelligence & Field Sales v1.0.0
- Created a modular field-sales intelligence skill covering 27 normalized construction and adjacent infrastructure verticals.
- Scope: event radar, vertical/buyer mapping, event evidence and scoring, pre-event ABM, onsite discovery, opportunity qualification, follow-up, event ROI and CRM handoff.
- Published under `uber-stroy/skills/vertical-event-intelligence/`; master skill and 12 supporting Markdown files saved in the personal Library.
- Complements Construction Market Intelligence, Construction Demand Hunter, ICP & Conversion Architect and Growth Agent; it does not replace them.
- Taxonomy provenance: the 2026-11-09 meeting pack said the then-current cohort map contained 23 directions and the legacy count of 27 required reconciliation of four missing items. The v1.0 list is a normalized operating taxonomy, not a verbatim recovery of the legacy list.
- QA: package structure, 27 verticals, workflow, evidence ladder, scoring and governance documented. Local Obsidian sync is not directly verified. Field effectiveness remains unproven until tests on three verticals and two events.
- The skill is a file-based reusable package; it is not automatically installed as a runtime agent.


## 2026-11-18 — Vertical Event Intelligence & Field Sales v1.0.0
- Added a modular event-intelligence and field-sales skill covering 27 construction, infrastructure, engineering, municipal and adjacent verticals.
- Package includes master skill, normalized 27-vertical catalogue, scoring/governance, prompt library, templates and six operating modules.
- Workflow: event radar → event fit scoring → vertical/event mapping → target account and buyer mapping → pre-event ABM → field discovery → qualified opportunity → follow-up → event ROI.
- Interfaces with Construction Market Intelligence, Construction Demand Hunter, ICP & Conversion Architect and Growth Agent are defined; no existing skill was overwritten.
- The 27 verticals are a normalized working taxonomy. Historical project notes recorded 23 active cohort directions and four missing legacy entries; do not claim verbatim recovery.
- Full package and Terra handoff/session/QA saved in Library. GitHub skill entry published under `uber-stroy/skills/vertical-event-intelligence/`.
- Documentation complete; field validation, live source adapters and CRM integration remain pending. Local Obsidian sync is not verified.


## 2026-11-18 — UBERСТРОЙ CEO skill v1.0.0
- Created a project-level CEO / Chief of Staff / CRO / COO orchestration skill.
- Core objective: prioritize next actions by realistic probability and timing of collected cash, positive contribution margin and repeatability.
- Includes dated project snapshot, demand/supply funnel coordination, `DAILY_CASH_SPRINT`, bottleneck diagnosis, opportunity qualification, unit economics, cash-cycle controls, compliance safeguards and specialist-skill handoffs.
- Published under `uber-stroy/skills/uberstroy-ceo/`; indexed in the Uberстрой skill registry and Terra skill register.
- Master skill and ZIP package saved to personal Library.
- The CEO skill orchestrates existing specialist skills; it does not merge or replace Growth Agent, Construction Market Intelligence, Construction Demand Hunter, ICP & Conversion Architect or Vertical Event Intelligence.
- Documentation QA passed. Runtime installation, local Obsidian synchronization and field effectiveness are not claimed. Validate against real calls, qualified demand, confirmed supply and paid fulfilment.


## 2026-11-18 — Field intelligence update: Черниговская, Коля Колес, supply qualification

- **Ринат — прораб / warm field contact, Черниговская.** Максим previously worked with him on monolithic works. Two touches are reported: an earlier phone call (exact date not recorded) about available general labour; Rinat reacted positively and said he could consider landscaping opportunities in Moscow next season. On 2026-11-18 Maxim messaged him with an offer to discuss the availability of monolithic workers. Rinat currently is in Moscow receiving treatment after a broken leg and is temporarily away from the site. Maxim reports a sizeable work volume and that Rinat has access to the Черниговская site / construction-site contacts. Exact site, project company, contractor, buyer, current work package and live labour need are **not verified**. Treat Rinat as a warm route into the site, not yet as a buyer or confirmed order. Next: get a response, identify exact site/legal contractor and decision-maker, establish current monolithic/support demand and potential pilot.
- **Коля Колес — individual entrepreneur / construction contractor contact.** Reported work: metal-structure installation and concrete works. In a 2026-11-18 conversation he said welders are currently needed, while his Nizhny Novgorod work is winding down. He also mentioned a large project in Kemerovo at a defence-industrial plant. Decision for the current operating sprint: do not pursue Kemerovo because of distance; keep Nizhny Novgorod as the priority. Phone, INN, exact welder count, qualification requirements, dates and rates are not yet known. Next: retain as a warm partner / potential buyer; ask about near-term Nizhny Novgorod work only if a local requirement emerges.
- **Александра / R-DOM52.** On 2026-11-18 Maxim sent a message asking which specialties she can provide, specifically whether her supply resembles Alexander's categories: general labour, concrete workers, monolithic workers, welders and low-voltage systems installers. Reply and category-level capacity are pending.
- **Александр — supply profile clarification.** Latest user clarification: claimed total reserve is approximately **50–70 people**, with reported categories including general labour, concrete workers, monolithic workers, welders and low-voltage systems installers. This is a supplier statement / user-reported estimate, not verified available capacity. Category-by-category headcount, date availability, rates, qualifications, documents and legal/HSE readiness remain unconfirmed.
- The updated CRM snapshot is saved in the personal Library as `/Uber Stroy/CRM/Workforce_Fleet_Master_CRM_NN_2026-11-18_v4.xlsx`. It includes the new Rinat and Kоля Колес records, updated Alexander and R-DOM52 notes, and four new append-only touch-log entries. The previous CRM file is retained as a prior version.

### Operating implication

For the immediate cash sprint, focus on **Nizhny Novgorod** and pursue a concrete, executable work package rather than broad regional expansion. Prioritize: (1) qualify the Черниговская route through Rinat, especially monolithic/support needs and the actual paying contractor; (2) qualify Alexander's 50–70 claimed total reserve by trade and date; (3) await R-DOM52's category breakdown; (4) keep Kоля Колес as a warm local contractor contact, but do not divert effort to Kemerovo. Moscow landscaping is a next-season option, not near-term revenue.

No order, buyer need, crew availability, price, contract or payment is confirmed by this update.

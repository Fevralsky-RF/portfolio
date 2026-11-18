# UBER STROY — DECISIONS LOG

## 2026-11-11 — First ICP reference page
The first full landing is for the construction-company owner / general contractor. This role is the economic buyer accountable for schedules, cost, customer commitments and site-level resource availability.

## 2026-11-11 — Core positioning
Primary promise: **«UBER STROY — нужные люди на ваши объекты»**.  
Support: organize work teams for defined tasks, volumes and schedules with agreed composition, conditions and operating process. Sell organized process, not a phone list.

## 2026-11-11 — Primary brand system
Use premium orange/black industrial identity with white/silver accents. Prefer cinematic construction photography, real-looking workers in orange PPE, foremen, cranes, concrete and active sites. Do not embed the one-page poster as a single landing image; decompose it into native HTML sections.

## 2026-11-11 — Photography remains an open defect
Do not mark imagery as fixed based only on asset paths or a successful Pages build. GitHub currently stores four WebP files at 7,500 bytes each; their blob SHA values mismatch validated local sources. User screenshot shows an empty image frame. Next step is binary-safe upload and SHA/HTTP/live-render verification.

## 2026-11-11 — Form is demo-only
The endpoint is blank. The form only validates and prepares a copy/download lead card; no data is sent or stored. No production intake until n8n endpoint, operator details, privacy notice and separate consent are approved.

## 2026-11-11 — Claims and compliance
Do not claim guaranteed headcount, availability, date of exit, replacement SLA, fixed price, customer outcomes or testimonials until backed by confirmed capacity, signed terms and real evidence.

## 2026-11-11 — Terra save convention
Store detailed handoff in `/Terra/Handoffs/`, session save in `/Terra/50-Sessions/`, update project state and this decision log, then make a meaningful Git commit/push and separate QA note. No permanent skill was edited in this session; do not create an unnecessary duplicate skill backup. Existing growth skill remains in Library root as `UBER_STROY_Growth_Agent_Skill_v2_Zero_to_One.md`.


## 2026-11-18 — Market research scope and evidence discipline
The national/regional construction market study is a separate research deliverable, not a landing-page change. Quantitative claims must use primary sources and distinguish construction output, approved budget allocations, tender values, payroll, outsourced shift labour and Uber Stroy revenue. Do not present preliminary metrics or a working niche hypothesis as final conclusions. See `Terra/Handoffs/UBER_STROY_MARKET_RESEARCH_HANDOFF_2026-11-18.md`.


## 2026-11-18 — Demand aggregation and managed-marketplace-first
UBER STROY's strategic model is a construction workforce demand aggregator connected to its own and partner workforce network. Initial sources: HeadHunter, Avito and the construction-company registry. The registry represents accounts; vacancies/listings are separate signals; a verified external-workforce need becomes an opportunity. Start as a managed operator that qualifies demand, confirms capacity, matches crews, coordinates fulfilment and learns from outcomes. Move toward self-service marketplace only after repeatable paid transactions. All outreach remains human-approved; source access and reuse must be permitted. Live scanning and production CRM are not yet confirmed.


## 2026-11-18 — ICP & Conversion Architect skill

**Decision:** create a reusable `ICP & Conversion Architect v1.0.0` for deep customer understanding and conversion design.

**Scope:** ICP and buying committee, JTBD, VoC, pains/outcomes, value proposition, offers, customer-language copy, creative strategy, landing pages, forms, CRO and experimentation.

**Boundary:** Growth Agent v2 remains responsible for growth system, channels, ABM/content cadence, CRM/sales pipeline, lead qualification and economics. ICP & Conversion Architect owns the quality of customer insight, offer, creative and conversion surface. Keep the skills distinct and connect through a documented handoff.

**UBER STROY application:** first reference project. Owner, foreman, site master and HR are distinct buyer-side ICPs; brigade lead / worker-team provider is a separate supply-side funnel.

**Governance:** no fabricated evidence, no unsupported guarantees, no promised conversion percentage and no production-ready status without verified assets, functioning lead flow and privacy/compliance gates.


## 2026-11-18 — Construction Market Intelligence v1.0.0

**Decision:** create a dedicated modular Construction Market Intelligence skill for market, project, procurement, labour-demand, buyer/account and opportunity intelligence.

**Architecture:** one orchestrator plus 14 specialist modules (M01–M14), with data dictionary, scoring/governance, prompt library, README and changelog. Published at `uber-stroy/skills/construction-market-intelligence/`; permanent master skill and support pack saved in Library.

**Boundary:** complements Growth Agent v2 (growth/channel/CRM/sales), Construction Demand Hunter (operational demand-signal discovery and qualification), and ICP & Conversion Architect (customer insight and conversion surface). Do not merge or overwrite these skills.

**Evidence and execution gates:** source-first; E0–E5 evidence ladder with confidence separate; anti-double-counting; demand is not worker capacity; labour estimates must be work-package/productivity based; legal/HSE, verified supply, payer, site access and positive contribution remain hard gates.

**Release status:** v1.0.0 package is saved and versioned. It is a file-based skill, not an automatically installed runtime agent. Field effectiveness is unproven until validated against a real project/work package and executed shift. Local Obsidian sync was not directly verified in this session.



## 2026-11-18 — Vertical Event Intelligence & Field Sales v1.0.0
**Decision:** publish a separate modular skill covering 27 normalized Uber Stroy market verticals. The skill owns the event-specific pre-event / onsite / post-event field-sales loop: event discovery and scoring, buyer/account mapping, meeting preparation, onsite discovery, opportunity qualification, follow-up and event ROI.

**Boundary:** Construction Market Intelligence owns broad market/project/procurement intelligence; Construction Demand Hunter owns operational demand-signal discovery and qualification; ICP & Conversion Architect owns customer insight and conversion design; Growth Agent v2 owns growth, ABM, CRM and sales pipeline. The new skill complements these capabilities and must hand off structured records to them.

**Taxonomy note:** historical notes state 23 current cohorts and a legacy commercial count of 27 with four categories to reconcile. The published 27-item catalogue is a normalized operational taxonomy, not a claim to have recovered the exact historic list.

**Governance:** evidence levels E0–E5; organiser-stated audience is not confirmed attendance; human approval before outreach; no invented contacts or demand; legal, HSE, verified supply, payer, site access, contract and positive contribution are hard gates. Field validation required.


## 2026-11-18 — Vertical Event Intelligence & Field Sales v1.0.0
Create a distinct skill for event-led B2B acquisition across 27 normalized construction and adjacent infrastructure verticals. It owns event radar, fit scoring, target-account mapping, meeting preparation, field discovery, CRM handoff and event attribution. It complements, and does not replace, Construction Market Intelligence, Construction Demand Hunter, ICP & Conversion Architect and Growth Agent.

The 27-item list is a normalized working taxonomy built from project records and the company/OKVED registry; historical notes mention 23 cohort directions and four missing legacy entries. Do not represent this taxonomy as verbatim archival recovery. Do not invent attendee, workforce capacity, safety qualification, commercial result or legal status. Human approval is required before outreach. Operational field validation and live integrations remain open.


## 2026-11-18 — UBERСТРОЙ CEO v1.0.0
**Decision:** create and maintain a project-level CEO / Chief of Staff / CRO / COO orchestration skill.

**Mission:** keep the full Uberстрой operating picture in view and prioritize actions by speed and probability of collected cash, positive contribution margin and repeatability. The daily operating question is what to do today to maximize the realistic probability of getting paid tomorrow.

**Scope:** project-state review, bottleneck diagnosis, daily cash sprint, buyer/supply funnel coordination, opportunity qualification, unit economics, payment-cycle discipline, execution control, decision support and handoffs to specialist skills.

**Boundary:** the CEO skill orchestrates but does not replace Growth Agent, Construction Market Intelligence, Construction Demand Hunter, ICP & Conversion Architect or Vertical Event Intelligence. Sales, Operations, Supply, Finance and Legal retain approval and execution ownership.

**Governance:** maintain dated facts vs hypotheses; never equate declared headcount with available capacity; no unsupported staffing, price, SLA or outcome promises; human approval before outreach and commitments; legal/HSE and positive contribution are hard gates.

**Release status:** v1.0.0 file-based skill published in GitHub and personal Library. Runtime installation, local Obsidian sync and field effectiveness are not claimed; field validation remains pending.


## 2026-11-18 — Field-led focus: Черниговская and Nizhny Novgorod first

**Decision:** Treat Rinat (foreman, warm contact on the Черниговская site) as a priority access/referral route to identify the actual site contractor, buyer and potential monolithic/support work package. Do not mark the site as a confirmed customer or demand until the exact project, payer, headcount, start date, price and acceptance/payment terms are verified.

**Supply:** latest user clarification for Alexander is a claimed total pool of approximately 50–70 people across general labour, concrete workers, monolithic workers, welders and low-voltage installers. This is not date-specific confirmed capacity. R-DOM52 has been asked to provide its trade mix and category-level headcount; response pending.

**Partner lead:** Kоля Колес (IP, metal-structure installation and concrete works) is recorded as a warm contractor contact. His current Nizhny Novgorod work is winding down; a welder need was mentioned, but timing and scale are unconfirmed. A large Kemerovo project is explicitly outside the current operating focus due to geography.

**Geographic priority:** Nizhny Novgorod remains the immediate cash focus. Moscow landscaping through Rinat is a next-season option only. No geographic expansion or mobilisation to Kemerovo without a separate commercial decision and proven economics.

**Execution rule:** the next milestone is one qualified local work package with a named payer, verified trade-specific capacity, written terms and positive contribution margin—not additional scraping or broad market coverage.


## 2026-11-18 — Local partner loop and 10-worker offer

**Rinat / Черниговская:** Maxim has offered Rinat 10 monolithic workers who have become free. Await Rinat's response. Treat this as a supply offer, not confirmed demand or an order. If accepted, qualify the actual work package, contractor, buyer/payer, exact headcount and trade mix, dates, rate, site access, HSE/legal requirements, acceptance and payment.

**Коля Колес:** his current «Белгорешенск» project needs welder-installers, but Maxim declined the geography. Keep the relationship warm through reciprocal Nizhny Novgorod referrals: Kоля alerts Uberстрой to local jobs; Uberстрой alerts Kоля to suitable local workers. Do not pursue the out-of-region project in the current sprint.

**Operating focus:** Nizhny Novgorod remains the immediate cash geography. Keep partner exchanges lightweight and opportunistic; the main sprint remains converting the 10-worker offer (if Rinat responds) or another local buyer need into a qualified, paid pilot. No mobilisation without confirmed buyer, payer, terms, legal/HSE and positive contribution.

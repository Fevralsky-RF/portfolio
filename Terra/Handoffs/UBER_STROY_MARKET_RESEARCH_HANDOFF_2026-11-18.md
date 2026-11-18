---
title: "UBER STROY — Market Research & Strategy Handoff"
date: 2026-11-18
tags: [terra, handoff, uber-stroy, market-research, strategy, construction]
status: research-in-progress / market-report-not-final
---

# UBER STROY — Market Research Handoff

**Date:** 2026-11-18  
**Project:** UBER STROY / Workforce Fleet  
**Repo:** Fevralsky-RF/portfolio · branch main  
**Scope requested:** Russian construction market 2020–2026, outlook to 2030, segment cohorts, government vs commercial demand, city ranking, Nizhny Novgorod SOM, national market, Parabellum "5 единичек".

## 1. What happened in this session

The user commissioned a deep, source-first market study. The intended deliverable is a standalone document that can be copied/shared in a chat, not a landing-page update.

Research began and several official-source indicators were collected, but the complete market study was **not finished** and no final research report/document was produced in this session. The next session must continue research, not present this handoff as the finished analysis.

## 2. Preliminary facts collected

Treat these as preliminary findings to re-verify against the exact primary source version before using in the final report.

### Russia
- 2025 construction work volume: **18.82 trillion RUB**, physical growth **2.5%** (Rosstat).
- In the 2024 construction work ownership structure, private ownership accounted for **94.2%**; state and municipal ownership together were approximately **1.8%**. Do not confuse ownership of the construction organization with the source of project financing or the customer type.
- 2025 housing commissioning: **108.1 million m²** (Rosstat).
- 2024 construction-organization cost structure proxy: wages **15.3%**, insurance contributions **4.4%**. This is not a direct estimate of the outsourced shift-worker market.

### Nizhny Novgorod region / city
- 2025 construction work volume in Nizhny Novgorod region: **305 billion RUB**, physical index **83%** to 2024. Nominal volume and physical index tell different stories; the market cannot be described as simply growing.
- 2025 regional housing commissioning: **64.6%** attributed to individual housing construction (ИЖС). Total housing commissioning is therefore not a proxy for addressable demand from large organised construction crews.
- Regional Address Investment Programme (АИП), version dated 28 September 2026, order **№ 834-р**: **40.164 billion RUB** for 2026 and **85.665 billion RUB** for 2026–2028. These are programme allocations, not the full cost of all projects and not Uber Stroy revenue.
- Earlier regional AИП snapshot of **25.49 billion RUB** is superseded by the later № 834-р edition; do not use the older value as current.
- City AИП extract: 44 rows, 43 numeric amounts, about **21.06 billion RUB** in 2026 allocations. One metro line (extension of the Avtozavodskaya line) accounts for about **15.37 billion RUB**; other identified large lines include Pochainsky ravine / stormwater and slope engineering (~1.74bn), water/wastewater networks in Olgino and Novinki (~416.8m), and water supply for Novoe Doskino (~120.4m). These are allocations, not contract values or labour budgets.
- Existing local research workbook (snapshot 06.11.2026): **132** base register records, **39** pipeline/KRT project lines, **19** tender signals, **44** AИП rows, **21** tracked source arrays. These are overlapping records, not 132 unique active construction sites.
- Official regional construction permit dataset showed **503 records** and commissioning permit dataset **214 records** as at 12.10.2026. The CSV rows were not parsed individually in the prior research; these counts must not be treated as active-site counts.

## 3. Existing internal sources to reuse

- `nizhny_novgorod_construction_landscaping_register_2026-11-06_v2.xlsx` — expanded local market register, including pipeline, tenders, AИП, landscaping and coverage notes.
- `nizhny_novgorod_construction_market_register_expanded_2026-11-06.xlsx` — earlier expanded local register.
- `UBER_STROY_Investor_Presentation.pdf` — previous investor/partner narrative and project assumptions.
- Market research landing already exists at `uber-stroy/market-research/index.html`: https://fevralsky-rf.github.io/portfolio/uber-stroy/market-research/
- Design references / Playbook: https://fevralsky-rf.github.io/portfolio/uber-stroy/design-playbook.html
- 10 references: https://fevralsky-rf.github.io/portfolio/uber-stroy/refs/

Important existing local CRM snapshot (06.11): 18 client companies, 27 objects/projects, 7 supplier candidates, 2 suppliers in negotiation. The earlier supplier-capacity estimates are unverified; do not treat them as available, legally checked workers.

## 4. Research rules

1. Use primary sources only for quantitative claims wherever possible: Rosstat, Минстрой, Минфин / budget portals, ЕИС закупки, ФАИП / regional АИП, Минтранс / Росавтодор, Росавтодор project data, ФНС / official registries, regional government and city administrations, official developer/project disclosures where applicable.
2. Cite the exact source, publication/version date, period, unit and geography.
3. Separate actuals, approved budgets, planned investment, tender NMCK, contract price, project capex and analyst estimates. They are not interchangeable.
4. Do not equate construction work volume with labour spend, or labour spend with outsourced crew spend.
5. Do not sum overlapping cohorts: roads, bridges, utilities, landscaping, housing, social infrastructure and industrial construction may overlap in project budgets.
6. Do not extrapolate a national cohort to Nizhny Novgorod by population alone. Use regional and city-level object counts / investment plans / tenders / permits and explicitly stated conversion assumptions.
7. Forecast to 2030 should distinguish official forecast, base case, upside and downside. Avoid invented precision.
8. Make the key market measure the addressable demand for organised labour teams and managed shifts, not the whole construction industry.

## 5. Required analysis still to complete

- Russia 2020–2026 time series: construction work volume, physical indices, housing commissioning, infrastructure capex, public procurement, industrial/commercial construction and wage/labour trends.
- 2030 outlook: official forecast assumptions and scenario model.
- Cohort map: residential multi-family, ИЖС, roads, bridges, rail/metro, utilities and pipelines, energy, industrial/commercial facilities, social/municipal buildings, public realm/landscaping, renovation/capital repair, demolition/earthworks, ports/airports/logistics, special construction.
- For each cohort: spend, trend, cyclicality, source of funding, buyer, tendering route, typical work packages, labour intensity, frequency/repeatability, crew profile, seasonality, payment risk and fit for Uber Stroy.
- Government vs commercial: compare customer/funding/procurement model, sales cycle, margin/working-capital risk and repeatability. Do not use ownership classification as a substitute.
- Nizhny Novgorod SOM: city vs agglomeration vs region boundary; annual addressable shift volume; realistic serviceable customer list; obtainable share based on verified capacity and sales funnel.
- National TAM/SAM/SOM and city comparison: identify strongest construction/labour cohorts and candidate cities using consistent primary-source metrics.
- Parabellum 5×1: choose one ICP, one painful job, one geography, one acquisition channel, one offer / monetisation model for the initial wedge.

## 6. Working strategic hypothesis — not final

Potentially attractive initial wedge to test: **recurring short-cycle labour packages for civil works and engineering infrastructure** (earthworks, site preparation, utility trenching, landscaping / external improvements, concrete auxiliary work) sold to regional general contractors and specialist subcontractors.

Why test it: visible public pipeline and repeatable work packages; less dependence on a single residential developer; multiple potential buyers; field-operational coordination creates value beyond forwarding contacts.

Risks: public procurement access may be indirect; seasonal work; price competition; HSE / permits / qualifications; delayed acceptance and payment; labour-law model must be legally sound. This is a hypothesis only, not the approved niche.

## 7. Next-session start prompt

Continue the commissioned construction-market research. Reopen the exact local register and investor presentation, then build the national 2020–2026 series and 2030 outlook from primary sources. Expand all construction cohorts, compare funding/customer models, calculate Nizhny Novgorod and national labour-shift TAM/SAM/SOM transparently, rank cities and choose the Parabellum 5×1 niche. Produce a standalone shareable Markdown/Word report with citations and an assumptions appendix. Do not claim the research is complete until all required sections and calculations are present.

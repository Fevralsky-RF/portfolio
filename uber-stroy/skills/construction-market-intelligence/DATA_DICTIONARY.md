# Data Dictionary — Construction Market Intelligence

## Сущности
Source; Observation; LegalEntity; Brand; Project; Site; Procurement; Contract; WorkPackage; BuyerRole; ContactChannel; Supplier; WorkerProfile; SkillEvidence; Opportunity; Shift; Outcome.

## Observation
`fact_id, entity_id, metric, value_raw, value_normalized, unit, currency, period_start, period_end, geography, evidence_level, confidence, source_id, source_url, publication_date, retrieved_at, methodology, reviewer, notes`

## Opportunity
`opportunity_id, project_id, buyer_id, site_id, work_package, work_type, skills, headcount_low, headcount_base, headcount_high, shifts_per_day, days, start_window, end_window, budget_status, payer, procurement_route, supplier_fit, legal_gate, hse_gate, gross_spread_low/base/high, payment_risk, score, owner, next_action, status`

## Source
`source_id, publisher, title, url, source_type, authority_tier, publication_date, update_date, geography, coverage, retrieval_date, access_notes, methodology, limitations`

## Evidence
E0 unverified; E1 public signal; E2 primary-source verified; E3 counterparty verified; E4 operationally verified; E5 executed/documented.

## Confidence
0.00–0.24 weak; 0.25–0.49 low; 0.50–0.69 medium; 0.70–0.84 high; 0.85–1.00 very high. Confidence is not evidence level: a primary source can be stale; a recent phone call can be undocumented.

## Lineage
Every derived metric stores input observation IDs, formula, assumptions, calculation date, model version and analyst.

## Privacy
Worker identity, passport/immigration, health and bank details must not enter public market intelligence. Operational personal data belongs in a separate access-controlled system. Use aggregated/anonymized attributes for market analysis.
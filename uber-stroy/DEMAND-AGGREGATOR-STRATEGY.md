# UBER STROY — Demand Aggregator Strategy

**Date:** 18 November 2026  
**Status:** strategic baseline; implementation not yet production-ready.

## Positioning
UBER STROY is a construction workforce demand aggregator connected to its own and partner workforce network. The initial model is a managed marketplace: qualify demand, confirm external-workforce need, match verified capacity, coordinate fulfilment and track outcomes. Self-service marketplace is a later evolution.

## Three initial data assets
1. HeadHunter — vacancies and employer demand signals.
2. Avito — public listings and requests for workers/crews, subject to platform terms and permitted access.
3. Construction Company Registry — canonical account backbone for Nizhny Novgorod and region.

## Data model
Company = account; each vacancy/listing = signal; verified commercial need = opportunity. Multiple signals attach to one account. Preserve source provenance, timestamps, evidence and change history; deduplicate reposts and cross-source mirrors.

## Workflow
Daily source checks (subject to access permissions and rate limits) → normalize → deduplicate → resolve company → classify demand → score Demand Heat and UBER Fit separately → human qualification → CRM sales task → approved contact → offer → pilot → fulfilment → outcome feedback.

## Sales
Personalised contact refers to the public signal and asks whether the need is current and whether external workforce supply is considered. AI may prepare drafts and tasks; a human approves recipient, channel, legal basis and message. No mass automated outreach.

## Release discipline
A vacancy is not proof of willingness to buy an external crew. Confirm buyer, scope, dates, capacity, economics, legal contracting model and site HSE before commitment. No bypass of platform access controls. The existing WF-00 is a synthetic sandbox; live adapters and production CRM are not claimed as implemented.

## Next milestone
Validate permitted HH/Avito access, company registry quality, canonical signal schema, deduplication/change detection and a human-reviewed CRM queue. Measure qualified buyer conversations and paid shifts rather than scraped row counts.

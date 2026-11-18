---
title: "UBER STROY — Demand Aggregator Handoff"
date: 2026-11-18
tags: [uber-stroy, handoff, demand-radar, marketplace]
status: strategy-saved / scanner-not-built
---

# UBER STROY — Demand Aggregator Handoff

## Strategic decision
Build UBER STROY as a construction workforce demand aggregator connected to an own/partner workforce network. Start as a managed marketplace/operator; evolve into self-service marketplace after repeatable paid fulfilment.

## Initial data sources
1. HeadHunter — vacancy and employer demand signals.
2. Avito — public workforce/crew ads and requests, subject to permitted access.
3. Construction Company Registry — canonical account backbone for Nizhny Novgorod and region.

## Core data model
- Company = account.
- Vacancy/listing = demand signal.
- Verified buyer need = opportunity.
- Contact = role-based buyer contact with provenance and lawful-use review.
- Activity = call/message/meeting/outcome.

Multiple signals attach to one company account. Deduplicate reposts and mirrors. Preserve source URL, timestamps, evidence and change history.

## Commercial funnel
NEW_SIGNAL → DEDUPLICATED → COMPANY_MATCHED → DEMAND_QUALIFICATION → BUYER_QUALIFIED → CONTACT_READY → CONTACTED → NEED_CONFIRMED → OFFER_DRAFTED → OFFER_SENT (human approved) → NEGOTIATION → PILOT → FULFILMENT → WON/LOST/NURTURE.

Outreach should be personalised to the public signal. AI prepares drafts/tasks; a human checks recipient, channel, legal basis, wording and timing. No mass automated outreach.

## Important guardrails
- Check platform terms/API and legal access before implementing each adapter; no bypass of access controls.
- Vacancy does not prove the company will buy an external crew.
- Keep Demand Heat, UBER Fit, evidence level and AI confidence separate.
- Confirm named workforce availability and legal/HSE gates before committing.
- Illustrative unit economics discussed in chat are not approved rates; reconcile conflicting internal assumptions before quoting.
- Working capital and payment terms are major operating risks.

## Implementation state
Strategy and workflow are documented. The latest private project status records WF-00 as a synthetic n8n sandbox. Production HH/Avito adapters, daily scan, PostgreSQL production storage, CRM intake, AI qualification, matching and outreach are not confirmed as implemented. DRY_RUN=true; SEND_ENABLED=false.

## Next steps
1. Inspect WF-00 output and record n8n version/install method.
2. Audit approved access methods for HH and Avito.
3. Validate company registry and provenance.
4. Design canonical observation schema, dedupe and change detection.
5. Build source adapters in DRY_RUN with fixtures before limited permitted live reads.
6. Build CRM review queue and human-approved outreach.
7. Validate a paid pilot before scaling.

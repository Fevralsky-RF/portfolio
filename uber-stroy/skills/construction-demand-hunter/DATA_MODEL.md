# Data Model — Construction Demand Hunter

## Core entities
- Source: разрешённый канал/публикация.
- Observation: неизменяемое исходное наблюдение.
- Signal: нормализованная интерпретация observation.
- Company/Account: организация-потенциальный покупатель.
- LegalEntity: юридическое лицо, если подтверждено.
- Project/Site: объект или площадка.
- BuyerRole/ContactRoute: роль покупателя и публичный business channel.
- Opportunity: квалифицируемая коммерческая потребность.
- Activity: звонок, письмо, встреча, follow-up и результат.
- Offer/Pilot/Fulfilment/ShiftOutcome: коммерческие и операционные результаты.

## Minimum fields
### Source
source_id, publisher, domain, source_type, access_status, terms_checked_at, allowed_method, rate_limit, reuse_notes, owner.

### Observation
observation_id, source_id, source_record_id, url, raw_title, raw_text/evidence_excerpt, published_at, updated_at, retrieved_at, content_hash, parser_version.

### Signal
signal_id, observation_id, signal_type, company_name_raw, location_raw, work_type, skills, headcount_low/base/high, schedule, start_window, observed_fields, extracted_fields, verified_fields, evidence_level, confidence, freshness_status.

### Account
company_id, legal_entity_id, name_raw, normalized_name, INN/OGRN, official_domain, role_in_chain, geography, verification_status, provenance.

### Opportunity
opportunity_id, company_id, project_id, signal_ids, buyer_status, external_supply_need_status, work_package, volume, time_window, payer_status, Demand_Heat, UBER_Fit, hard_gate_status, legal_gate, HSE_gate, supply_gate, economics_gate, stage, owner, next_action, due_at.

### Activity
activity_id, opportunity_id, contact_route_id, channel, activity_type, occurred_at, human_approved_by, outcome, evidence, opt_out_status.

## Provenance
Keep raw and normalized values separately. Each derived field records source observation IDs, extraction/model version, calculation formula, timestamp, reviewer and assumptions. Never overwrite historical observations silently.

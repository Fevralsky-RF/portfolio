# UBER STROY — Workforce Skill Intelligence
## Product and AI-agent specification / draft v1

### Product promise
UBER STROY does not merely source a requested headcount. It structures a worker's practical experience and proposes people whose experience is relevant to the actual operations requested at a site.

The target workflow:
1. Worker voluntarily records a 2–3 minute voice introduction.
2. AI converts the story into a structured draft skill profile.
3. Worker reviews and confirms/corrects the draft.
4. Evidence is tracked separately from self-reported experience.
5. Customer describes the work to be done, not just a headcount.
6. Matching ranks available workers by task relevance, evidence, availability, reliability and site constraints.
7. Selected crew is confirmed by the supplier/crew lead and dispatched.
8. A 30–60 second post-shift voice note appends a dated experience event; it does not silently rewrite the worker's historical profile.

### Worker voice-intake interview (2–3 minutes)
The worker can speak naturally; these prompts are scaffolding, not a rigid exam.

1. On what types of sites have you worked? (residential construction, industrial, roads, utilities, landscaping, warehouse, etc.)
2. What specific operations did you personally perform? Ask for concrete actions, not only trade names.
3. What materials, tools and equipment did you work with?
4. For each operation, what was your participation level?
   - assisted / helped a specialist;
   - performed under supervision;
   - performed independently.
5. When did you last do this work, how regularly, and for how long?
6. What work would you prefer to do? What work should not be assigned to you?
7. Separately: what qualifications, certificates, permits or safety training can you document? Do not infer these from the voice story.

### Four focused AI-agent roles

#### Agent 1 — Worker Profile Builder
**Purpose:** transcribe and structure the worker's voice message.

**Tasks**
- Transcribe the audio and retain its source reference.
- Extract site types, trades, task operations, materials, tools, equipment and recency.
- Split broad claims into specific operations.
- Classify participation as assisted, supervised, independent or unclear.
- Mark every skill as self-reported until another source confirms it.
- Produce a plain-language summary and ask the worker to approve or correct it.

**Guardrails**
- Never invent years of experience, certifications or skill levels.
- Never upgrade assisted to independent.
- Preserve uncertainty and contradictory answers.
- Worker controls whether the profile is shared with a customer.

#### Agent 2 — Job Request Interpreter
**Purpose:** turn a customer's natural-language request into structured work requirements.

**Tasks**
- Extract work type, individual operations, required headcount, date/time, site/location, shift duration and commercial terms.
- Separate must-have operations from optional experience.
- Identify work that requires verified qualifications, permits, licences or safety training.
- Ask for missing details before dispatch.

**Guardrails**
- Do not treat "20 general labourers" as a sufficiently specified task where the site requires specialist work.
- Do not suggest unqualified people for regulated or safety-critical tasks.
- Do not invent a legal admission, certification or safety clearance.

#### Agent 3 — Crew Matching & Verification
**Purpose:** rank eligible and available people against the structured request.

**Provisional ranking logic (weights must be calibrated against pilot outcomes)**
- 40% relevance of specific operations performed;
- 25% evidence level for those operations;
- 20% confirmed availability for the requested shift;
- 10% verified attendance / client feedback history;
- 5% logistics and site fit.

Hard constraints (required permits, safety approvals, availability and site access) are filters, not soft-score bonuses. Weights are an MVP hypothesis, not a validated predictive model.

**Output for every recommendation**
- Match score and its provisional basis;
- exact operations that match;
- participation level per operation;
- evidence level and source;
- missing requirements / reasons not to assign;
- availability confirmation and supplier/crew lead;
- human confirmation status.

**Guardrails**
- A high match score is not proof of qualification.
- Self-report is not the same as supervisor confirmation or practical verification.
- Never hide a missing permit or mismatch behind an aggregate score.
- Final dispatch requires a responsible human operator and supplier/crew-lead confirmation.

#### Agent 4 — Shift Learning & Evidence Agent
**Purpose:** append evidence after a completed shift.

**Tasks**
- Invite the worker to record a 30–60 second voice note: what tasks they actually performed, with which materials/tools, and at what participation level.
- Capture the site, job, shift date, supplier and responsible supervisor.
- Collect structured supervisor/client feedback where available.
- Append a dated experience event to the worker history.
- Update reliability and matching evidence only according to defined rules.

**Guardrails**
- Do not silently overwrite the initial profile.
- Do not promote a skill level from repeated self-report alone.
- Keep positive, negative and disputed feedback with provenance and review status.

### Recommended profile data model

    worker_id: US-DEMO-0417
    profile_status: draft | worker_confirmed | verified
    consent: voice_processing, profile_sharing, consent_timestamp
    site_types: [residential_construction]
    skills:
      - operation: formwork_preparation
        participation_level: supervised
        materials: [plywood, fasteners]
        tools: [hand_tools]
        evidence_level: self_reported
        source_audio_id: ...
    qualifications:
      - name: ...
        status: not_checked | verified
        document_ref: null
    availability: []
    experience_events: []

### Matching example: "20 people for monolithic work"
A useful request is decomposed into operations, for example:
- site preparation and work-zone housekeeping;
- moving and feeding materials;
- assisting with formwork preparation;
- assisting rebar crews, within confirmed competence and supervision.

The system returns a proposed crew with a per-person explanation:
- who has relevant monolithic-site experience;
- who has handled the exact operation;
- whether the person assisted, worked under supervision or worked independently;
- whether the experience is self-reported, supervisor-confirmed or practically checked;
- whether the person is available and eligible for this site.

It must not label a worker a concrete specialist merely because they once worked on a concrete site.

### Core pilot metrics
- share of worker profiles completed and worker-confirmed;
- share of skill claims with supervisor/client/practical evidence;
- time from customer request to proposed crew;
- fill rate for requested headcount;
- confirmed show-up rate;
- replacement rate and time to replace;
- customer acceptance / repeat-order rate;
- relationship between operation-level match and actual shift outcome.

### Product boundary
This file defines agent roles and a product specification. It does not mean production AI agents, voice processing, scoring or integrations have already been deployed. MVP can start with human-reviewed profiles and rule-based matching, then automate only the steps proven useful in live shifts.

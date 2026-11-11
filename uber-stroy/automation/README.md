# UBER STROY — Automation & Intelligence

This directory documents the automation architecture for the UBER STROY workforce operations platform.

The system has two connected engines:
- **Demand Radar:** discovers staffing and subcontracting demand from approved company websites and official project/procurement feeds.
- **Workforce Radar:** maintains consent-based worker, crew and supplier profiles with operation-level experience evidence.
- **Demand-to-Crew:** matches verified requests to available people, then routes proposals and dispatch through human approval.

Start here:
- [Architecture](ARCHITECTURE.md)
- [Workflow catalog](WORKFLOWS.md)
- [Source policy](SOURCE-POLICY.md)

The private Obsidian vault contains the database schema, company seed registry, operational notes and n8n test workflow. Do not commit worker contacts, personal data, credentials, tokens, cookies or private CRM data to this public repository.

**Current mode:** design/MVP preparation. These documents do not claim live scraping, worker matching, outreach or dispatch is deployed.
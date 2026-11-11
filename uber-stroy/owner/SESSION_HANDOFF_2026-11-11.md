---
title: "UBER STROY — Owner Landing Handoff"
date: 2026-11-11
tags: [terra, handoff, uber-stroy, landing, github-pages, marketing]
status: handoff-ready / landing-not-production-ready
---

# UBER STROY — SESSION HANDOFF

**Main offer:** UBER STROY — нужные люди на ваши объекты.  
**Current ICP:** owner / general contractor.  
**Live page:** https://fevralsky-rf.github.io/portfolio/uber-stroy/owner/  
**Repo:** Fevralsky-RF/portfolio · branch `main` · folder `uber-stroy/owner/`.

## 1. Product context

UBER STROY is a construction operations partner that helps organize working teams for defined site tasks, volumes and schedules. The value is not a contact list: it is a controlled process from demand intake and team selection to agreed composition, responsible contact, site exit, shift tracking and acceptance.

Work directions: general construction, monolith/RC, roads and bridges, engineering networks, earthworks and landscaping.

Core process: request → clarify work/volume/date/site requirements → check actual capacity → agree composition/terms/lead/acceptance → organize site exit → track shifts and close agreed work.

Do not promise headcount, availability, start dates, replacement or price until capacity and terms are verified.

## 2. ICP map

- **Owner / general contractor:** economic buyer; pains are delays, cost overruns, fragmented suppliers, uncertain responsibility and loss of management focus. Language: deadlines, scope, cost, work front, schedule, site, acceptance.
- **Foreman:** operational champion; needs the right people to arrive for a specific task, with a known team lead and communication line.
- **Site manager / master:** needs trade match, shift coverage, work-front capacity and predictable site coordination.
- **HR / recruitment:** needs reliable structured demand, agreed requirements, reduced manual sourcing and clear feedback from sites.
- **Brigade lead / worker-house owner:** supply-side partner; needs clear scope, headcount, dates, terms and acceptance. This is a separate funnel from the buyer landing.

The first page is the owner page; do not reuse one generic text for all roles.

## 3. Offer and brand

Primary: **«UBER STROY — нужные люди на ваши объекты».**  
Supporting line: «Помогаем организовать рабочие команды под задачи, объёмы и график строительного проекта — с согласованием состава, условий и порядка работы».

Brand: orange/black industrial, white/silver accents, US geometric mark, cinematic photo scenes of working construction sites, cranes, concrete, foremen and crews in orange PPE. Do not insert the poster itself as an image; rebuild its hierarchy as native web sections.

## 4. Landing status

Sections: header/navigation, hero, owner pain, solution, work directions, operating-control pillars, five-step process, pilot section, downtime calculator, FAQ, lead form and mobile CTA.

Interactions: mobile menu, anchor navigation, FAQ accordion, user-input downtime calculator, required-field/phone validation, UTM capture, copy/download lead card.

**Form is demo-only.** Webhook is blank; form does not send or persist personal data. It prepares a card for copy/download. No production CRM intake yet.

## 5. Confirmed image defect

The user screenshot of 2026-11-11 shows an empty photo frame in the owner-pain section. The issue is not resolved.

GitHub remote tree has four WebPs at exactly 7,500 bytes each; blob IDs mismatch the validated local source files. Source files live under `/mnt/data/uber-stroy-owner-landing/assets/`.

| File | Valid local bytes | Dimensions | Expected Git blob SHA |
|---|---:|---:|---|
| owner-hero.webp | 27,232 | 640×360 | `ac6d203f0c545238611b9c4b9fe3011819d20907` |
| owner-problem.webp | 18,134 | 600×444 | `bddab4e55aae25ff0f343d3d0b1ad18dfa83ba12` |
| team-on-site.webp | 27,764 | 640×261 | `9e68ff4d3a44d1b2ae9dc9a758ce05e1b692ab4e` |
| owner-site.webp | 15,020 | 600×498 | `8fa8903287e9b1776c4aae54ac0a000d01cd2bf7` |

For each asset: run `file`; calculate Git blob SHA from raw bytes (`SHA1("blob " + byte_length + NUL + bytes)`); upload without truncation; refetch tree and confirm exact size/SHA; confirm public HTTP 200 and `Content-Type: image/webp`; then inspect live desktop/mobile screenshots. Pages workflow success alone is not proof that images decode.

Latest checked Pages run before this documentation commit: #43051519911, conclusion success for previous site commit `3f91d3af45acdc1f3af492b522ab134d79f549e2`. Current repo HTML blob before docs commit: `a56f37a11fca8c499a8b058b6c19ddd2860cfa9c`.

## 6. Production blockers

- no n8n webhook for this form;
- legal operator and contact details not supplied;
- privacy notice and separate consent are not approved;
- contractual model, delivery capacity, geography and site-safety requirements need confirmation;
- no verified customer cases/reviews yet.

## 7. Backlog

**P0 — visual integrity:** replace all four WebP assets from valid local sources, verify blob SHA/size, HTTP/content-type, Pages workflow and live desktop/mobile rendering. Do not change the approved marketing structure.

**P1 — lead system:** after Maxim supplies required legal/contact info, connect n8n webhook, CRM/table with ID, role, company, phone, object, work type, crew size, start date, details, UTM, source, status, owner, next step and timestamps; add deduplication, spam control and success/error UX.

**P2 — other ICP pages:** foreman, site manager/master, HR, brigade lead / worker-house supplier. Each needs separate JTBD, pain language, objections, proof, CTA and form fields.

## 8. Marketing / QA filters

1. ICP clarity.
2. Voice of Customer / role language.
3. Pain → concrete operating outcome.
4. Offer clarity in the first screen.
5. Proof discipline: no invented numbers, clients, testimonials or guarantees.
6. One primary CTA and mobile sticky CTA.
7. Objection handling: access, composition, price, responsibility, records, documents.
8. Relevant images per block.
9. Mobile readability, tap targets and no horizontal overflow.
10. Technical checks: files, dimensions, content type, JS, links, form, performance.
11. Legal/privacy check before receiving personal data.
12. Release gate: P0 and P1 must be closed before production claims or paid traffic.

## 9. Terra conventions

Detailed handoff: `/Terra/Handoffs/`.  
Session save: `/Terra/50-Sessions/`.  
Update project status, decision log and QA evidence; make a meaningful commit/push. A permanent skill was not edited in this session, so no skill backup was created. Existing skill file remains in Library root: `UBER_STROY_Growth_Agent_Skill_v2_Zero_to_One.md`.

## 10. Start prompt for the next chat

> Continue UBER STROY from this handoff. First read this file, PROJECT_STATUS.md and DECISIONS.md. Do not redesign the approved orange/black owner landing or claim it is fixed. Restore the four existing photo assets from the valid local source files. The current remote WebP blobs are all 7,500 bytes and their SHA values mismatch the valid originals. Upload binary files without truncation, verify exact Git blob SHA and size, verify HTTP 200 + image/webp, wait for Pages deployment, then inspect real desktop/mobile rendering. The owner form is demo-only; n8n, legal operator, privacy notice and consent are still pending. Save state, decision log, handoff and QA according to Terra.

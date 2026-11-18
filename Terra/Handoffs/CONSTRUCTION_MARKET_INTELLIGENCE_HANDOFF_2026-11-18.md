# Construction Market Intelligence — Handoff
**Date:** 2026-11-18  
**Version:** 1.0.0  
**Project:** UBER STROY / Workforce Fleet

## Created
A modular market-intelligence skill system with one orchestrator and 14 specialist modules. It is complementary to the existing Growth Agent skill; the latter was not overwritten.

## Repository
`uber-stroy/skills/construction-market-intelligence/`

## Library
`/Uber Строй/Skills/Construction Market Intelligence v1.0.0/`  
A ZIP package is also stored at `/Uber Строй/Skills/Construction_Market_Intelligence_v1.0.0.zip`.

## Architecture
M01 macro market/forecast; M02 construction cohorts; M03 project pipeline; M04 labour demand/skills; M05 TAM/SAM/SOM and unit economics; M06 regional/city intelligence; M07 buyer/account ABM; M08 competitors/benchmarks; M09 public procurement; M10 commercial projects; M11 data engineering/source QA; M12 legal/HSE; M13 opportunity scoring/Parabellum 5×1; M14 decision reporting.

Support files: README, changelog, data dictionary, scoring/governance, prompt library.

## Core safeguards
Source-first; evidence ladder E0–E5; confidence separate from evidence; no double counting; construction output/CAPEX/NMCK/contract/payroll/shift revenue separated; demand is not capacity; labour estimates require work-package and productivity logic; legal/HSE and supply are hard gates.

## Next improvement cycle
1. Test each module on an actual Nizhny Novgorod object.
2. Validate M04 labour demand against a real work package and operations data.
3. Validate M05 economics against current approved prices and actual direct costs.
4. Add connector/API specifics only after access and terms are verified.
5. Add automated source refresh only after a source registry and QA controls exist.

## Important limitation
This is a reusable file-based skill package stored in Library and GitHub, not an automatically installed native system skill. Load `SKILL.md` and the required module(s) when invoking it.

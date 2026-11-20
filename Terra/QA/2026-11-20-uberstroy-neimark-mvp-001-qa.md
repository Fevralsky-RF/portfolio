# UBERСТРОЙ — QA
**Date:** 2026-11-20  
**Scope:** CRM v6, pilot economics, activity record and Terra synchronization for MVP-001 / Neimark

## Workbook checks
- [x] Existing CRM v5 located and imported.
- [x] Existing CRM rows and identifiers preserved; new opportunity C-020 added.
- [x] Existing records C-019 and WF-008 retained without overwriting.
- [x] Activity record ACT-037 added in the workbook's supplementary activity log.
- [x] Dedicated worksheet `MVP и смены` created with MVP-001 and an 11-point execution checklist.
- [x] Pilot rates recorded: 3,700 RUB incoming per worker-shift; 3,200 RUB worker payout; 500 RUB gross spread per worker-shift.
- [x] Four-person totals verified: 14,800 RUB planned incoming; 12,800 RUB planned payouts; 2,000 RUB planned gross spread.
- [x] Unit-economics formula for spread and gross margin inspected.
- [x] Formula error scan returned no #REF!, #DIV/0!, #VALUE!, #NAME? or #N/A matches.
- [x] New pilot worksheet rendered and visually reviewed.
- [x] Exported workbook: `/mnt/data/uberstroy_update/Workforce_Fleet_Master_CRM_NN_2026-11-20_MVP_v6.xlsx`.

## Terra documentation
- [x] `uber-stroy/owner/PROJECT_STATUS.md` updated.
- [x] `uber-stroy/owner/DECISIONS.md` updated.
- [x] `Terra/Handoffs/UBER_STROY_FIELD_INTELLIGENCE_HANDOFF_2026-11-18.md` updated.
- [x] New session save created.
- [x] This QA record created.

## Limitations / not claimed
- Four workers are scheduled for 2026-11-21; their attendance and completion of the shift are not yet verified.
- Actual incoming payment and worker payout have not yet occurred / been verified in this record.
- 2,000 RUB is gross spread before taxes and other operating costs, not net profit.
- Exact legal counterparty, payer, acceptance process, and documentary basis need clarification.
- Four regular workers from 2026-11-23 are expected by Maxim but not yet confirmed; 10 workers is a scale target.
- The reported 41 billion RUB project value is user-provided and not independently verified.
- Legal/HSE/site access requirements must be confirmed before mobilisation.

## Result
**PASS — records and planned economics are captured, with commercial status explicitly marked as scheduled / pending execution.**

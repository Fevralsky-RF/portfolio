# M06 — Opportunity Scoring

## Цель
Ранжировать возможности, не скрывая неопределённость и блокирующие условия.

## Два независимых балла
Demand Heat 0–100:
- freshness 20;
- specificity of work/site 20;
- evidenced scale/repeatability 20;
- urgency/time window 15;
- source reliability 15;
- signal clarity 10.

UBER Fit 0–100:
- geography/logistics 15;
- service/work-package fit 15;
- buyer path 15;
- supply confirmability 20;
- repeatability 10;
- legal/HSE feasibility 10;
- contribution/payment risk 15.

Weights are starting defaults for pilot calibration, not validated predictive coefficients. Store score components, missing fields, calculation version and timestamp.

## Hard gates
Source permission; company/buyer identity; current need; external supplier acceptance; confirmed or confirmable workforce; legal contracting model; HSE/admissions; positive contribution after direct costs; acceptable payment/working capital.

## Output
Score bands + component table + hard gate status + confidence + evidence level + next action. A high score never overrides a blocked hard gate.

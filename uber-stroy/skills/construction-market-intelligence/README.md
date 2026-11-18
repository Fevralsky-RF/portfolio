# Construction Market Intelligence v1.0.0 — UBER STROY

Модульная система рыночной разведки и анализа спроса на рабочие команды.

## Состав
- `SKILL.md` — управляющий навык и архитектура.
- `modules/01`–`modules/14` — 14 самостоятельных специализированных модулей.
- `DATA_DICTIONARY.md` — сущности, поля, evidence, confidence, lineage.
- `SCORING_AND_GOVERNANCE.md` — scoring, gates, роли и аудит.
- `PROMPT_LIBRARY.md` — готовые запросы для запуска.

## Использование
Сначала прочитать `SKILL.md`, затем подключать только релевантные модули. Для глубокого исследования запускать цепочки, заданные оркестратором. Все выводы должны быть воспроизводимы и иметь source lineage.

## Совместимость
Дополняет, но не заменяет `UBER_STROY_Growth_Agent_Skill_v2_Zero_to_One.md`, Sales/ABM и Workforce Operations/Skill Intelligence.

## Версионирование
v1.0.0 — 2026-11-18. Изменение весов, evidence levels, схемы данных или состава модулей требует обновления версии и changelog.
# M09 — Sales Pipeline Manager

## Цель
Управлять движением opportunity по воронке с владельцем, сроком и проверяемой причиной перехода.

## Канонические этапы
NEW_SIGNAL → DEDUPLICATED → COMPANY_MATCHED → DEMAND_QUALIFICATION → BUYER_QUALIFIED → CONTACT_READY → CONTACTED → NEED_CONFIRMED → OFFER_DRAFTED → OFFER_SENT → NEGOTIATION → PILOT_AGREED → FULFILMENT → WON / LOST / NURTURE / DISQUALIFIED.

## Обязательные поля активности
owner, next_action, due_at, channel, activity_type, outcome, evidence, updated_at, reason_for_hold/loss.

## Правила переходов
- Статус меняется только при наличии соответствующего события/доказательства.
- OFFER_SENT требует человеческого подтверждения фактической отправки.
- PILOT_AGREED требует зафиксированных объёма, цены, сроков и условий.
- FULFILMENT требует подтверждённой мобилизации и исполнения.
- WON требует согласованного критерия результата; оплаченная смена учитывается отдельно.
- Network/parser error никогда не закрывает сигнал.

## Выход
Очередь задач, просрочки, next actions, история переходов и audit trail.

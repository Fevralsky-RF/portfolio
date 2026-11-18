# M02 — Signal Extractor

## Цель
Преобразовать разрешённый источник или входящий запрос в структурированное наблюдение, сохранив исходное доказательство.

## Типы
CREW_REQUEST; RECURRING_WORKFORCE; SINGLE_POSITION; SUBCONTRACT_SCOPE; PROJECT_SIGNAL; INTERMEDIARY; IRRELEVANT.

## Действия
- Сохранить raw title/text/URL/source record ID, даты публикации/обновления/получения и content hash.
- Извлечь компанию/работодателя, объект, географию, вид работ, навыки, headcount, сменность, срок, оплату и контактный route только если они явно присутствуют.
- Каждому полю присвоить происхождение: observed, extracted, human_verified или model_estimate.
- Сохранить evidence excerpt и confidence отдельно.
- Не додумывать число работников, объект, срок или намерение купить подряд.
- Пометить изменения: NEW, CHANGED, REPOSTED, CLOSED, STALE, UNCHANGED; ошибки доступа не являются CLOSED.

## Выход
Canonical signal JSON с raw values, normalized values, field provenance и evidence.

## QA
Повторный сбор не создаёт новый сигнал при совпадающем source ID/hash; история изменений не перезаписывается.

# UBER STROY — Workflow Catalog

## Naming convention
WF-XX | UBER STROY | NAME

Каждый workflow имеет версию, владельца, назначение, вход/выход, Credentials, error path, idempotency strategy и smoke-test. Все внешние действия выключены до проверки.

## Полный каталог

| ID | Название | Триггер | Результат | Очередь |
|---|---|---|---|---|
| WF-00 | Platform Health & Run Control | daily scheduler | run_id, health, список разрешённых источников | P0 |
| WF-01 | Company Registry Builder | CSV / ручная форма / официальный справочник | компании и проверенные домены | P0 |
| WF-02 | Company Site Scanner | ежедневно по allowlist | новые/изменённые вакансии и закупочные страницы | P0 |
| WF-03 | External Demand Connectors | разрешённый API/feed или ручной сигнал | внешние observations | P1 |
| WF-04 | Project & Tender Radar | официальный API/выгрузка | объекты, тендеры, фактические подрядчики | P1 |
| WF-05 | Parser, Normalizer & Entity Resolution | очередь observations | каноническая компания и сигнал спроса | P0 |
| WF-06 | Demand Intelligence & Scoring | новый/обновлённый сигнал | тип спроса, операции, Heat, Fit, confidence | P0 |
| WF-07 | Worker Intake & Profile Builder | форма/бот/партнёрский feed | профиль работника с согласием и evidence | P0 |
| WF-08 | Supplier & Availability Sync | ежедневная форма/бот/поставщик | доступность людей/бригад | P0 |
| WF-09 | Crew Matching & Capacity Planner | квалифицированный заказ | объяснимый shortlist/бригада | P1 |
| WF-10 | Sales Copilot & Proposal Builder | подтверждённая человеком возможность | карточка и черновик КП/сообщения | P1 |
| WF-11 | Dispatch, Attendance & Shift Learning | заказ/смена | подтверждение состава, явка, обратная связь | P1 |
| WF-12 | Observability, QA & Dead Letter | события и ошибки | alerts, retries, audit, quality metrics | P0 |

## Первые релизы

### WF-00 — Platform Health & Run Control
- Ежедневно 08:00 Europe/Moscow плюс ручной запуск.
- Создать run_id, проверить PostgreSQL, n8n credentials и статусы источников.
- Блокировать пересекающийся запуск через source_runs/DB lock.
- Обрабатывать только разрешённые источники.
- Для ошибки сохранять статус, класс, число retry и execution URL.
- Не повторять неидемпотентные действия вслепую.

### WF-01 — Company Registry Builder
- Импортировать начальный приватный список 20 компаний.
- Нормализовать название, ИНН, регион, сектор.
- Разделить юридическое лицо и бренд/группу.
- Найти официальный сайт как кандидата; подтвердить связь по ИНН/официальной странице/источнику.
- Создать company_sites: карьера, вакансии, подрядчикам, закупки, новости объектов.
- Сохранить основание и статус разрешения. Неподтверждённые домены не сканировать.

### WF-02 — Company Site Scanner
- Ежедневно обрабатывать очередь компаний партиями по 10–25 сайтов.
- До запроса проверить permission status, host allowlist, robots, частоту.
- HTTP GET с User-Agent, timeout, ETag/If-Modified-Since, лимитом размера и redirect allowlist.
- При 304 не запускать parser; при 200 извлечь JSON-LD JobPosting, sitemap/RSS и разрешённый текст.
- Не сканировать весь домен: только известные и обнаруженные разрешённые страницы.
- Вычислить content hash; unchanged → last_seen; changed/new → observation.
- Upsert по source_id + canonical_url + external_post_id/hash.
- Закрытие подтверждать явным признаком или несколькими успешными проверками; единичный сетевой сбой не означает закрытие.

### WF-05 + WF-06 — Parse → Resolve → Demand Intelligence
Вход: observation, URL, текст/JSON-LD, company_id при наличии.

Выход строгой JSON-схемы:
- title, description_summary, company_candidate, inn, employment_type, role, operations[];
- demand_type, buyer_role, headcount, shift_pattern, start_date, site_location;
- rate_min, rate_max, pay_period, mandatory_requirements[], documents[];
- is_recurring, source_confidence, field_evidence[], missing_fields[];
- demand_heat, uber_fit, hard_stops[], human_review_required.

Каждое поле имеет provenance: источник, URL, фрагмент, дата, confidence. Отсутствующее значение — null. Сначала JSON-LD/RSS/selectors, LLM — только для сложного текста и после валидации схемы.

### WF-07 + WF-08 — Workforce Intake
- Собственная форма/бот и согласованный партнёрский импорт.
- Согласие до транскрибации/обработки; отдельно согласие на передачу профиля заказчикам.
- Аудио во временное приватное хранилище; транскрипт — ограниченный доступ.
- Profile Builder создаёт draft, работник/оператор утверждает.
- Навыки из голоса имеют уровень SELF_REPORTED; документы проверяются отдельно.
- Доступность обновляется ежедневно и имеет TTL.

### WF-09 — Matching
- Job Request Interpreter декомпозирует работы на операции и обязательные требования.
- Проверить eligibility, допуски, наличие, логистику и договорную модель.
- Сформировать shortlist/бригаду и объяснить включение каждого человека.
- Поставщик и диспетчер подтверждают состав вручную.

### WF-10 — Sales Copilot
- Карточка клиента/объекта/потребности.
- Предварительная unit economics на реальных тарифах и затратах.
- Черновик КП/сообщения со ссылкой на презентацию.
- Проверить канал и основание. SEND_ENABLED=false.
- Отправка — только после явного human approval; логировать адресата, канал, версию текста и результат.

### WF-11 — Dispatch & Shift Learning
- Подтверждение смены, состава, объекта и ответственного.
- Регистрация явки, опозданий, замены, фактических операций.
- Добровольный 30–60 секундный voice feedback после смены.
- Append-only evidence event, без бесшумного переписывания профиля.

## Надёжные паттерны
- Idempotency: повторная обработка observation обновляет запись, не плодит копии.
- At-least-once: считать повторы нормой; не повторять побочные действия без защиты.
- Rate limiting: ограничения на host/source, concurrency 1–3 на домен по умолчанию, delay и jitter.
- Circuit breaker: серия 403/429/robots disallow → отключение источника и review, не обход.
- Dead letter: битый JSON/ошибка LLM/неразрешённый redirect → ручной разбор.
- Observability: discovered/changed/closed/duplicate/error, latency, cost, parse confidence.
- Версионировать parser, prompts и schema.
- Коммерческая возможность и отправка требуют разных human approval.

## Рекомендуемые n8n node families
Schedule Trigger, Manual Trigger, HTTP Request, HTML Extract, Code, IF, Switch, Merge, Split Out, PostgreSQL, Error Trigger, Telegram для внутренних уведомлений и добровольного intake. Node typeVersion выбирать после проверки установленной версии n8n.

## Что первые workflow не делают
- скрейпинг/массовую выгрузку HH, Avito или публичных Telegram-каналов без разрешения;
- обход CAPTCHA, robots или rate limits;
- массовые коммерческие рассылки и автоматический обзвон;
- передачу профиля работника без согласия;
- подбор по одной только профессии/самоотчёту;
- считать вакансию доказанным заказом на бригаду;
- считать тендер готовым заказом без проверки фактического подрядчика.
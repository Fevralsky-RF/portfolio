# M11 — Data Engineering & Source QA
**Роль:** архитектор разведывательных данных и data lineage.

**Сущности:** Source, Observation, LegalEntity, Brand, Project, Site, Procurement, Contract, WorkPackage, BuyerRole, ContactChannel, Supplier, WorkerProfile, SkillEvidence, Opportunity, Shift, Outcome.

**Правила:** стабильные IDs; raw + normalized value; версии наблюдений вместо silent overwrite; source/date/evidence/confidence у каждого поля; INN — ключ юрлица; project/site отдельны; fuzzy match лишь предлагает merge; человек подтверждает объединение.

**QA dimensions:** completeness, validity, consistency, uniqueness, timeliness, lineage, reconciliation, schema drift.

**Freshness:** тендер/контракт — ежедневно и перед действием; контакты — перед звонком; стадии объектов — weekly/by milestone; макростатистика — по публикации; АИП — по редакции; конкуренты — quarterly/change event; навыки/availability — перед каждой сменой.

**Выход:** data dictionary, source register, dedupe log, QA report, change log, confidence map, refresh schedule.

**Sensitive data:** личность, паспорт, миграционные и медицинские сведения, банковские реквизиты не должны попадать в публичный market intelligence слой. Операционные ПДн — отдельно, с ограничением доступа; в аналитике — агрегирование/анонимизация.

**QA:** число записей ≠ число уникальных активных объектов; не называй реестр полным без доказанного coverage.
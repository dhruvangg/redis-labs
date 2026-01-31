# Tool Selection Matrix

## Payment Processing
❌ Redis
✔️ PostgreSQL / Ledger DB

Why?
- Needs durability
- Needs transactions
- Needs audit trail

Redis risks:
- Eviction
- Accidental flush
- No rollback

---

## Chat Typing Indicator
✔️ Redis Pub/Sub

Why?
- Ephemeral
- Low value
- Best-effort acceptable

DB is overkill.

---

## Order Events
⚠️ Redis Streams (sometimes)
✔️ Kafka / Queue (usually)

Why?
- Ordering matters
- Replay matters
- Scale matters

Redis Streams break when:
- Data grows
- Consumers lag

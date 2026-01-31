# Day 3 – Redis Data Structures That Actually Matter

> **Goal:** Learn how to model real problems using the right Redis data structures.

Today is not about commands.  
It’s about **why** Redis provides multiple data structures — and what breaks when you ignore them.

---

## What You Will Learn

- Why SETs provide idempotency
- How HASHes replace small JSON objects
- How SORTED SETs solve ranking problems efficiently
- Common bad modeling patterns

---

## Folder Structure

```

day3/
├─ online-users-set.js
├─ presence-hash.js
├─ leaderboard-zset.js
└─ bad-vs-good.js

````

---

## Task 1 – Online Users with SET

**Problem:** Track unique online users safely.

### Why SET?
- Enforces uniqueness automatically
- Prevents duplicates
- O(1) add/remove operations
- Idempotent writes

### Key Concept: Idempotency

> Adding the same value multiple times results in the same final state.

```js
await redis.sAdd(KEY, 'user1')
await redis.sAdd(KEY, 'user1')
````

Final result:

```
user1 (only once)
```

No locks. No checks. No cleanup.

---

## Task 2 – Presence Metadata with HASH

**Problem:** Store small structured metadata per user.

### Why HASH?

* Efficient memory usage
* Field-level updates
* Avoids JSON stringify/parse
* Ideal for small objects

### Presence Is Activity-Based

Presence should be updated on:

* WebSocket connect
* Heartbeat / ping
* Meaningful user actions

**Not** only on login.

### TTL Is Mandatory

Presence data must expire automatically to handle crashes:

```js
await redis.expire(key, 60)
```

TTL acts as a self-healing mechanism.

---

## Task 3 – Leaderboard with SORTED SET

**Problem:** Rank users by score.

### Why SORTED SET?

* Automatic ordering
* Fast top-N queries
* Efficient score updates

```js
zAdd leaderboard score member
zRange leaderboard 0 9 REV
```

SORTED SETs replace expensive `ORDER BY` queries for hot paths.

---

## Task 4 – Bad vs Good Modeling

### ❌ Bad Pattern

```js
await redis.set('users', JSON.stringify([...]))
```

* Requires parsing
* No partial updates
* Memory inefficient

### ✅ Good Pattern

```js
await redis.sAdd('users', ['a', 'b', 'c'])
```

Uses Redis’ strengths instead of fighting them.

---

## Key Takeaways

* Strings are the lowest-level Redis type
* SETs provide idempotency and safety
* HASHes are ideal for small objects
* SORTED SETs solve ranking problems efficiently
* Data modeling matters more than commands

---

## Done When

* You used SET instead of arrays
* You avoided JSON for small objects
* You can explain *why* each data structure was chosen

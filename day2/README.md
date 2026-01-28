# Day 2 – Cache Patterns Without Lies

> **Goal:** Learn how caching actually fails in production — and how to fix it.

Today is about **trust boundaries**.  
Redis is fast, but it does not know when your database changes.

---

## What You Will Learn

- Cache-Aside pattern (the correct way)
- How stale cache bugs happen
- Why TTL is not a full solution
- How explicit invalidation fixes lies

---

## Task 1 – Cache-Aside Pattern

**Mental model:**
- DB = source of truth
- Cache = optional optimization

### Flow
1. Check Redis
2. If miss → fetch DB
3. Store in Redis with TTL

## Task 2 – Create a Stale Cache Bug

**Scenario:**

* Cache is populated
* DB value changes
* Cache is NOT invalidated

### Result

❌ Cache returns outdated data
❌ Users see wrong information

This bug exists in most real systems.

---

## Task 3 – Fix with Explicit Invalidation

**Rule:**

> If you write to the DB, you must think about the cache.

### Strategy

1. Update DB
2. Delete Redis key
3. Allow cache to repopulate

**Outcome:**

* Cache never lies for long
* TTL becomes a safety net, not a crutch

---

## Key Takeaways

* Redis does not track DB changes
* TTL reduces risk, not correctness
* Invalidation logic belongs near writes
* Cache-Aside is simple and predictable

---

## Common Mistakes

* Trusting TTL alone
* Updating DB without cache invalidation
* Treating cache as truth

---

## Done When

* You intentionally reproduced stale cache
* You fixed it knowingly
* You no longer blindly trust Redis 😄
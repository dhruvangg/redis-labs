# Day 5 – Invalidation Is Hard

## Task 1: TTL Only
TTL delays correctness.

## Task 2: Event Invalidation
Fast but fragile.

## Task 3: Versioned Keys
Brute force, reliable.

## Final Thought
Correctness costs complexity.
Simplicity costs staleness.


| Strategy   | Correctness  | Complexity | Real Use       |
| ---------- | ------------ | ---------- | -------------- |
| TTL        | ❌ Eventually | 🟢 Low     | Cheap cache    |
| Events     | ⚠️ Mostly    | 🔴 High    | Critical paths |
| Versioning | ✅ Strong     | 🟡 Medium  | Dashboards     |

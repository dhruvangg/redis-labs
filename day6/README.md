# Day 6 – Scaling Without Regret

## Task 1: Memory Pressure
Eviction deletes data.

## Task 2: Bad Commands
Redis is single-threaded.
Blocking commands hurt everyone.

## Task 3: Rate Limiting
Redis excels at protection layers.

## Rule of Thumb
If Redis hurts, it's usually your fault.

| Problem     | Redis Truth       |
| ----------- | ----------------- |
| Memory      | Finite & ruthless |
| Eviction    | Silent data loss  |
| KEYS        | Production killer |
| Rate limits | Ideal use case    |

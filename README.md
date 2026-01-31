# Redis Labs Project

This repository contains a collection of experiments, examples, and best practices for working with Redis. Each folder represents a specific day of learning or a topic, with scripts and examples to demonstrate various Redis features and use cases.

## Project Structure

- **connect.mjs**: Entry point for connecting to Redis.
- **package.json**: Contains project dependencies and scripts.

### Day 1: Basics
- `key-namespacing.mjs`: Demonstrates key namespacing in Redis.
- `ttl-experiment.mjs`: Experiments with time-to-live (TTL) settings.

### Day 2: Caching
- `cache-aside.mjs`: Implements the cache-aside pattern.
- `fake-db.mjs`: Simulates a database for caching experiments.
- `fix-with-invalidation.mjs`: Fixes stale cache issues with invalidation.
- `stale-cache-bug.mjs`: Demonstrates a stale cache bug.

### Day 3: Data Structures
- `bad-vs-good.mjs`: Compares bad and good practices with Redis.
- `leaderboard-zset.mjs`: Implements a leaderboard using sorted sets.
- `online-users-set.mjs`: Tracks online users with sets.
- `presence-hash.mjs`: Demonstrates presence tracking with hashes.

### Day 4: Pub/Sub and Streams
- **Pub/Sub Typing**:
  - `publisher.mjs`: Publishes messages to a Redis channel.
  - `subscriber.mjs`: Subscribes to a Redis channel.
- **Streams Orders**:
  - `producer.mjs`: Produces messages to a Redis stream.
  - `consumer.mjs`: Consumes messages from a Redis stream.

### Day 5: Event-Driven Systems
- **Event Invalidation**:
  - `invalidator.mjs`: Handles cache invalidation events.
  - `reader.mjs`: Reads data with event-driven invalidation.
  - `writer.mjs`: Writes data with event-driven invalidation.

### Day 6: Memory Management
- **Memory Pressure**:
  - `keys-vs-scan.mjs`: Compares `KEYS` and `SCAN` commands.
  - `pressure.mjs`: Simulates memory pressure scenarios.
  - `sliding-window.mjs`: Implements a sliding window rate limiter.

### Day 7: Advanced Topics
- **Choose Tool**:
  - `decisions.md`: Documents decisions for choosing Redis tools.
- **Multi-Tenant**:
  - `blast-radius.mjs`: Demonstrates multi-tenant isolation.
- **Remove Redis**:
  - `fallback.mjs`: Implements a fallback mechanism when Redis is unavailable.

## How to Use

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the scripts for each day or topic as needed:
   ```bash
   node day1/key-namespacing.mjs
   ```

## Prerequisites

- Node.js (v14 or higher)
- Redis server

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy learning with Redis!
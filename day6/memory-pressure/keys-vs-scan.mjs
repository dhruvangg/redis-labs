import { createClient } from 'redis';

const redis = createClient();
await redis.connect();

for (let i = 0; i < 100_000; i++) {
  await redis.set(`user:${i}`, `data-${i}`);
}

console.time('KEYS');
await redis.keys('*');
console.timeEnd('KEYS');

console.time('SCAN');
let cursor = '0';

do {
  const res = await redis.scan(cursor, { MATCH: 'user:*', COUNT: 1000 });
  cursor = res.cursor;
} while (cursor !== '0');
console.timeEnd('SCAN');

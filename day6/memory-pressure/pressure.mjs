import { createClient } from 'redis';

const redis = createClient();
await redis.connect();

let i = 0;

while (true) {
    const key = `blob:${i}`;
    const value = 'x'.repeat(10_000_000); // 10 MB
    await redis.set(key, value);
    console.log(`written ${key}`);
    i++;
}

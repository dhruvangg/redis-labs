import { createClient } from 'redis';

const redis = createClient();
await redis.connect();

const LIMIT = 5;
const WINDOW = 10; 

async function isAllowed(userId) {
  const now = Date.now();
  const key = `rate:${userId}`;

  await redis.zAdd(key, [{ score: now, value: now.toString() }]); 
  await redis.zRemRangeByScore(key, 0, now - WINDOW * 1000);

  const count = await redis.zCard(key);
  await redis.expire(key, WINDOW);

  return count <= LIMIT;
}

setInterval(async () => {
  const allowed = await isAllowed('user-42');
  console.log(allowed ? '✅ allowed' : '⛔ blocked');
}, 1000);

import { createClient } from 'redis';

const redis = createClient();
await redis.connect();

setInterval(async () => {
  let data = await redis.get('dashboard:user:42');

  if (!data) {
    data = JSON.stringify({ balance: 200 });
    await redis.set('dashboard:user:42', data, { EX: 30 });
    console.log('♻️ cache rebuilt');
  }

  console.log('📖 read:', data);
}, 4000);

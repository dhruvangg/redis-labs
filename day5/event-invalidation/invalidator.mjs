import { createClient } from 'redis';

const subscriber = createClient();
const redis = createClient();

await subscriber.connect();
await redis.connect();

await subscriber.subscribe('invalidate', async (key) => {
    console.log(key);
    
    await redis.del(key);
    console.log('🧹 cache cleared:', key);
});

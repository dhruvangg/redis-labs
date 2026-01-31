import { createClient } from 'redis';

const redis = createClient();
await redis.connect();

setInterval(async () => {
    console.log('💾 DB updated');
    await redis.publish('invalidate', 'dashboard:user:42');
    console.log('📣 invalidation event published');
}, 5000);

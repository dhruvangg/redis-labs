import { createClient } from 'redis';

const sub = createClient();
await sub.connect();

await sub.subscribe('typing', (message) => {
    console.log('👀 received:', message);
});

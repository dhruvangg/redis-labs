import { createClient } from "redis";

const pub = createClient();
await pub.connect();

setInterval(async () => {
    await pub.publish('typing', JSON.stringify({
        user: 'user-1',
        typing: true,
        at: Date.now()
    }))
    console.log('Typing event sent');
}, 2000)
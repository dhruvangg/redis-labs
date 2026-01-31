import { createClient } from 'redis';

const client = createClient();
await client.connect();

let orderId = 1;

setInterval(async () => {
    const id = await client.xAdd(
        'orders-stream',
        '*',
        { orderId: String(orderId++), status: 'CREATED' }
    );
    console.log('📦 order event:', id);
}, 2000);

import { createClient } from 'redis';

const client = createClient();
await client.connect();

const group = 'order-group';
const consumer = 'worker-1';

try {
    await client.xGroupCreate('orders-stream', group, '0', {
        MKSTREAM: true
    });
} catch { }

while (true) {
    const response = await client.xReadGroup(
        group,
        consumer,
        { key: 'orders-stream', id: '>' },
        { COUNT: 1, BLOCK: 5000 }
    );

    if (!response) continue;

    for (const stream of response) {
        for (const message of stream.messages) {
            console.log('✅ processing order:', message.message);
            await client.xAck('orders-stream', group, message.id);
        }
    }
}

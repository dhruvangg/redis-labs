import { createClient } from "redis";

const client = createClient();
const KEY = 'leaderboard:sales';

async function main() {
    await client.connect();

    await client.zAdd(KEY, [
        { score: 1500, value: 'Alice' },
        { score: 3000, value: 'Bob' },
        { score: 2500, value: 'Charlie' }
    ]);

    const top = await client.zRange(KEY, 0, 2, { REV: true, WITHSCORES: true });
    console.log('Top Salespersons:', top);

    await client.quit();
}

main()
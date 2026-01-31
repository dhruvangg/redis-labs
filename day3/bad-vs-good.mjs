import { createClient } from "redis";

const client = createClient();
const KEY = 'leaderboard:sales';

async function main() {
    await client.connect();

    await client.set('bad:users', JSON.stringify(['a', 'b', 'c']))

    await client.sAdd('good:users', ['a', 'b', 'c'])

    console.log('Bad:', await client.get('bad:users'))
    console.log('Good:', await client.sMembers('good:users'))

    await client.quit();
}

main()
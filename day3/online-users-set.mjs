import { createClient } from "redis";

const client = createClient();
const KEY = 'presence:online-users';

async function main() {
    await client.connect();

    await client.sAdd(KEY, ['user1', 'user2', 'user3']);
    await client.sRem(KEY, 'user2');

    console.log('Online Users: ', await client.sMembers(KEY));
    console.log('Count: ', await client.sCard(KEY));
    
    await client.quit();
}

main()
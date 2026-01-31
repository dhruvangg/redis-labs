import { createClient } from "redis";

const client = createClient();
const KEY = 'presence:online:42';

async function main() {
    await client.connect();

    await client.hSet(KEY, {
        status: 'online',
        lastSeen: Date.now().toString(),
        device: 'mobile'
    })

    console.log('Presense Info:', await client.hGetAll(KEY));
    
    
    await client.quit();
}

main()
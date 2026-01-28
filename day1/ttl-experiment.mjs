import { createClient } from "redis";

const client = createClient();

async function main() {
    await client.connect();

    const key = 'experiment:ttl';

    await client.set(key, 'Temp Data', {
        EX: 5
    })

    console.log('TTL Immediately:', await client.ttl(key));

    setTimeout(async () => {
        console.log('TTL after 3s:', await client.ttl(key));
        console.log('Value after 3s:', await client.get(key));
    }, 3000);
    
    setTimeout(async () => {
        console.log('TTL after 6s:', await client.ttl(key));
        console.log('Value after 6s:', await client.get(key));
    }, 6000);

}

main()
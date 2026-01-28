import { createClient } from 'redis'

async function main(){
    const client = createClient()

    client.on('error', (err) => {
        console.error('Redis Error', err);
        process.exit(1)
    })

    await client.connect();

    console.log('Connected to Redis securely!');

    await client.quit();
}

main()
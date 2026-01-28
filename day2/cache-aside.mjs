import { createClient } from "redis";
import { fetchDashboardFromDB } from "./fake-db.mjs";

const client = createClient();
const KEY = 'cache:dashboard'

async function getDashboard() {

    const cached = await client.get(KEY)

    if (cached) {
        console.log('From Cache: ', cached)
        return cached
    }

    console.log('From DB, miss cache')

    const value = await fetchDashboardFromDB()
    console.log('💽 Fetched value', value);
    
    await client.set(KEY, value, {EX: 10}) // 10 seconds TTL
    console.log('💾 Cached value')

    return value
}

async function main() {
    await client.connect()

    await getDashboard() // From DB
    await getDashboard() // From Cache

    await client.quit()
}

main()
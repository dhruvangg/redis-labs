import { createClient } from "redis";
import { fetchDashboardFromDB, updateDashboardInDB } from "./fake-db.mjs";

const client = createClient();
const KEY = 'cache:dashboard'

async function main() {
    await client.connect()

    const value = await fetchDashboardFromDB()
    await client.set(KEY, value, { EX: 60 }) // 10 seconds TTL
    console.log('Initial cached value: ', await client.get(KEY));

    await updateDashboardInDB(200)

    await client.del(KEY)
    console.log('Cache invalidated')

    // re-fetch
    const fresh = await fetchDashboardFromDB()
    await client.set(KEY, fresh, { EX: 60 })

    console.log('New cached value:', await client.get(KEY))

    await client.quit()
}

main()
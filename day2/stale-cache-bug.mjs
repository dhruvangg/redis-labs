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

    console.log('DB updated');
    console.log('Cache value still: ', await client.get(KEY));

    await client.quit()
}

main()
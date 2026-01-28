import { createClient } from "redis";

const client = createClient()

function tenantKey(tenantId, resource, id = '') {
 return `tenant:${tenantId}:${resource}:${id}`;
}

async function main(){
    await client.connect();

    const t1Key = tenantKey(1, 'presence', 'users')
    const t2Key = tenantKey(2, 'presence', 'users')

    // console.log(t1Key);
    

    await client.sAdd(t1Key, ['userA', 'userB'])
    await client.sAdd(t2Key, 'userC')

    console.log('Tenant 1 Users: ', await client.sMembers(t1Key));
    console.log('Tenant 2 Users: ', await client.sMembers(t2Key));

    await client.quit();
}

main()
import { createClient } from 'redis';

const redis = createClient();
await redis.connect();

async function spamTenant(tenantId) {
  for (let i = 0; i < 50_000; i++) {
    await redis.set(`tenant:${tenantId}:key:${i}`, 'x'.repeat(100));
  }
  console.log(`🔥 tenant ${tenantId} spammed redis`);
}

async function normalTenant(tenantId) {
  console.time(`tenant-${tenantId}`);
  await redis.get(`tenant:${tenantId}:profile`);
  console.timeEnd(`tenant-${tenantId}`);
}

await spamTenant('evil');
await normalTenant('good');

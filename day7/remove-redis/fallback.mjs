async function getDashboard(userId) {
  try {
    // pretend redis is down
    throw new Error('Redis unavailable');
  } catch {
    console.log('⚠️ Redis down, fallback to DB');
    return { stats: 'computed-live' };
  }
}

console.log(await getDashboard(42));

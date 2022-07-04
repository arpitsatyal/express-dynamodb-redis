import redis from 'redis';

const redisClient = redis.createClient();

redisClient.on('error', (err) => {
  console.log('Redis Creation Error:\n', err);
});

export default redisClient;

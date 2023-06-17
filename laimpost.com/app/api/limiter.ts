import { RateLimiter } from 'limiter';

export const revalidateLimiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'minute',
  fireImmediately: true,
});

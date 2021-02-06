import { container } from 'tsyringe';

import { ICacheProvider } from './models/interface-cache-provider';

import { RedisCacheProvider } from './implementations/redis-cache-provider';

const providers = {
  redis: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);

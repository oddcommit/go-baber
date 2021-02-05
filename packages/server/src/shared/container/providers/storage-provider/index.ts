import { container } from 'tsyringe';
import uploadConfig from '@config/upload';

import { IStorageProvider } from './models/interface-storage-provider';

import { DiskStorageProvider } from './implementations/disk-storage-provider';
import { S3StorageProvider } from './implementations/s3-storage-provider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);

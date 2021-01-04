import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { UsersController } from '../controllers/users-controller';
import { UserAvatarController } from '../controllers/user-avatar-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export { usersRouter };

import { Router } from 'express';

import { ProfileController } from '../controllers/profile-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

const profileRouter = Router();

const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export { profileRouter };

import { Router } from 'express';

import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensure-authenticated';
import { ProvidersController } from '../controllers/providers-controller';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

export { providersRouter };

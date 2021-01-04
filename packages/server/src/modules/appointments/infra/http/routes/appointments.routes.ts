import { Router } from 'express';

import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensure-authenticated';
import { AppointmentsController } from '../controllers/appointments-controller';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

export { appointmentsRouter };

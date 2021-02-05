import { Router } from 'express';

import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensure-authenticated';
import { AppointmentsController } from '../controllers/appointments-controller';
import { ProviderAppointmentsController } from '../controllers/provider-appointments-controller';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export { appointmentsRouter };

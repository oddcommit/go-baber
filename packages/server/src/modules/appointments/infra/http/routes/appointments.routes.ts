import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensure-authenticated';
import { AppointmentsController } from '../controllers/appointments-controller';
import { ProviderAppointmentsController } from '../controllers/provider-appointments-controller';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export { appointmentsRouter };

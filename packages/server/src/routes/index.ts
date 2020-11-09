import { Router } from 'express';

import { appointmentsRouter } from './appointmenst.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export { routes };

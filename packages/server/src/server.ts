import 'reflect-metadata';

import express from 'express';

import { routes } from './routes';

import './database';

const SERVER_PORT = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(SERVER_PORT, () => {
  console.log(`[*] Server started on port ${SERVER_PORT}...`);
});

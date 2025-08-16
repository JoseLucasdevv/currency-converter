import express from 'express';
import router from './routes/router';
import { errorHandler } from './exceptions/GlobalHandlerException';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use(errorHandler);
export = app;

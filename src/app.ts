import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';

app.use('/api/v1/users', UserRoutes);

// app.get('/', async(req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello test');
  next();
});

// Global error handler
app.use(globalErrorHandler);

export default app;

import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';

app.use('/api/v1', routes);

// app.get('/', async(req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello test');
  next();
});

// Global error handler
app.use(globalErrorHandler);

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API NOT FOUND',
      },
    ],
  });
  next();
});

// const academicSemester = {
//   year: '2024',
//   code: '01',
// };

// const testId = async () => {
//   const testId = await generateFacultyId();
//   // console.log(testId);
// };
// testId();

export default app;

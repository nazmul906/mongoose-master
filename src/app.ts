import express, { Application, Request, Response } from 'express';
// npm i --save-dev @types/express
// npm i --save-dev @types/cors
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use(
  '/api/v1/students',
  StudentRoutes,
); /* here studentroutes is in route component */

app.get('/', (req: Request, res: Response) => {
  //   let b;

  const a = 10;
  res.send(a);
});

export default app;

// to find error by lint run : npm run lint

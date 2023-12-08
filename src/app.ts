import express, { Application, Request, Response } from 'express';
// npm i --save-dev @types/express
// npm i --save-dev @types/cors
import cors from 'cors';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  //   let b;

  const a = 10;
  res.send(a);
});

export default app;

// to find error by lint run : npm run lint

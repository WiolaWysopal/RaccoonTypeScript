import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  req.user = { id: 1, name: 'John Doe' };
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.json({ user: req.user });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

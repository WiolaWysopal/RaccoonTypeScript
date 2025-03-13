import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: { id: number; name: string };
  }
}

export {};

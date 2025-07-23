import { Context } from 'hono';

export interface JWTPayload {
  userid: number;
  username: string;
}

export interface Variables {
  userid: number;
}

export type AppContext = Context<{ Variables: Variables }>; 
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { mainRouter } from './routes/index.js';

const app = new Hono();

// Middleware
app.use('*', cors());

// Routes
app.route('/api/v1', mainRouter);

// Health check endpoint
app.get('/', (c) => {
  return c.json({ message: 'Server is running!' });
});

export default app; 
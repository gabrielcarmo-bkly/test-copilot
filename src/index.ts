import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json());

// Health check route
app.get('/hc', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'Application is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Express server is running!',
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📍 Health check available at http://localhost:${port}/hc`);
});
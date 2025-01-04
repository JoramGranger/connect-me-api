import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config/db';
import bundleRoutes from './routes/bundleRoutes';
import userRoutes from './routes/userRoutes';
import paymentRoutes from './routes/paymentRoutes';

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api/bundles', bundleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);

export default app;

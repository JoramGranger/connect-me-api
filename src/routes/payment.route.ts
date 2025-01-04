import { Router } from 'express';
import { initiatePayment, paymentCallback } from '../controllers/payment.controller';

const router = Router();

router.post('/initiate', initiatePayment);
router.post('/callback', paymentCallback);

export default router;

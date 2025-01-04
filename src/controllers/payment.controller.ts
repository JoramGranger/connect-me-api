import { Request, Response } from 'express';
import { initiatePayment, handlePaymentCallback } from '../utils/paymentGateway';

export const initiatePayment = async (req: Request, res: Response) => {
  try {
    const { amount, userId } = req.body;
    const paymentUrl = await initiatePayment(amount, userId);
    res.status(200).json({ paymentUrl });
  } catch (error) {
    res.status(500).json({ error: 'Payment initiation failed.' });
  }
};

export const paymentCallback = async (req: Request, res: Response) => {
  try {
    const { status, transactionId } = req.body;
    const result = await handlePaymentCallback(status, transactionId);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Payment callback processing failed.' });
  }
};

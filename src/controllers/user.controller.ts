import { Request, Response } from 'express';
import User from '../models/user.model';
import Token from '../models/token.model';
import { sendSMS } from '../utils/smsSender';
import { generateToken } from '../utils/tokenGenerator';

export const createToken = async (req: Request, res: Response) => {
  try {
    const { phoneNumber, bundleId } = req.body;
    const tokenValue = generateToken();
    const tokenExpiry = new Date();
    tokenExpiry.setHours(tokenExpiry.getHours() + 12);

    const newToken = new Token({ value: tokenValue, expiryDate: tokenExpiry });

    await newToken.save();
    await sendSMS(phoneNumber, tokenValue);

    const newUser = new User({
      phoneNumber,
      token: tokenValue,
      bundleId
    });

    await newUser.save();

    res.status(200).json({ message: 'Token sent successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating token.' });
  }
};

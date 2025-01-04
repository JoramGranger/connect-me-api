import { Request, Response } from 'express';
import Bundle from '../models/bundle.model';

export const createBundle = async (req: Request, res: Response) => {
  try {
    const { name, duration, price } = req.body;
    const bundle = await Bundle.create({ name, duration, price });
    res.status(201).json(bundle);
  } catch (error) {
    res.status(500).json({ error: 'Error creating bundle' });
  }
};

export const getBundles = async (req: Request, res: Response) => {
  try {
    const bundles = await Bundle.find();
    res.status(200).json(bundles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bundles' });
  }
};
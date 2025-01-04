import { Router } from 'express';
import { createToken } from '../controllers/user.controller';

const router = Router();

router.post('/create-token', createToken);

export default router;

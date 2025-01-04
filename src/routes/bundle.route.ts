import { Router } from 'express';
import { createBundle, getBundles } from '../controllers/bundle.controller';

const router = Router();

router.post('/', createBundle);
router.get('/', getBundles);

export default router;

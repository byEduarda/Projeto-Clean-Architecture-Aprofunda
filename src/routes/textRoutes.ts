import { Router } from 'express';
import * as textController from '../controllers/textController';

const router = Router();

router.post('/texts', textController.createText);
router.get('/texts', textController.listTexts);

export default router;

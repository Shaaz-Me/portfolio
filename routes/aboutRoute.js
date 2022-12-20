import { Router } from 'express';
const router = Router();
import aboutController from '../controllers/aboutController.js';


router.get("/", aboutController);


export default router;
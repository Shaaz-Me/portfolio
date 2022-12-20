import { Router } from 'express';
const router = Router();
import errorController from '../controllers/errorController.js';


router.get("/", errorController);


export default router;
import { Router } from 'express';
const router = Router();
import homeController from '../controllers/homeController.js';


router.get("/", homeController);


export default router;
import { Router } from 'express';
const router = Router();
import projectController from '../controllers/projectController.js';


router.get("/", projectController);


export default router;
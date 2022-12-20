import { Router } from 'express';
const router = Router();
import contactController from '../controllers/contactController.js';


router.get("/", contactController.get);
router.post("/",contactController.post);


export default router;
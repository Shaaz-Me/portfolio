const express = require('express');
const router = express.Router();
const {contactController,contactPostController} = require('../controllers/contactController');


router.get("/", contactController);
router.post("/",contactPostController);


module.exports= router;
const express = require('express');
const router = express.Router();
const {contactController,contactPostController} = require('../controllers/contactController');
const errorController = require('../controllers/errorController');


router.get("/", contactController);
router.post("/",contactPostController);
router.get("*", errorController);


module.exports= router;
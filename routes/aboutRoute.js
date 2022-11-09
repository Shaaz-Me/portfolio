const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const errorController = require('../controllers/errorController');


router.get("/", aboutController);
router.get("*", errorController);


module.exports = router;
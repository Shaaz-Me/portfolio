const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const errorController = require('../controllers/errorController');


router.get("/", projectController);
router.get("*", errorController);


module.exports = router;
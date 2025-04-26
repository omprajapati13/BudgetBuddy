// const express = require("express");
// const { protect } = require("../middleware/authMiddleware");
// const { getDashboardData } = require("../controllers/dashboardController");

// const router = express.Router();

// router.get("/", protect, getDashboardData);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/dashboardController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getDashboardData);

module.exports = router;

const express = require('express');
const { getPortfolioData } = require('../controllers/portfolioController');

const router = express.Router();

// Define the route
router.get('/', getPortfolioData);

module.exports = router;

const { fetchPortfolioData } = require('../services/portfolioService');

// Controller function for portfolio data
const getPortfolioData = (req, res) => {
    const portfolioData = fetchPortfolioData();
    res.json(portfolioData);
};

module.exports = { getPortfolioData };


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolioRoutes');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve static files (including the resume)
app.use(express.static(path.join(__dirname, 'public')));

// Use portfolio routes
app.use('/api/portfolio', portfolioRoutes);

module.exports = app;

const express = require('express');
const router = express.Router();
const StockController = require('../controllers/stockController');

router.get('/stock-prices', StockController.getStockPrices);

module.exports = router;

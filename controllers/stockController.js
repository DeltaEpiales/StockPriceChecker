const axios = require('axios');
const Stock = require('../models/stock');

const getStockPrices = async (req, res) => {
  try {
    const { stock, like } = req.query;
    const apiUrl = `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stock}/quote`;
    const response = await axios.get(apiUrl);

    let stockData = await Stock.findOne({ symbol: stock }).exec();
    if (!stockData) {
      stockData = new Stock({ symbol: stock });
    }

    if (like) {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      if (!stockData.likes.includes(ip)) {
        stockData.likes.push(ip);
      }
    }

    await stockData.save();

    res.json({
      stockData: {
        stock: response.data.symbol,
        price: response.data.latestPrice,
        likes: stockData.likes.length,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getStockPrices,
};

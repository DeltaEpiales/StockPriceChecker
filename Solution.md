# Stock Price Checker Solution

## Overview

This project is a Stock Price Checker app built with Node.js, Express, and MongoDB. It allows users to get up-to-date stock price information using a third-party API and supports features like liking stocks. The app follows the specifications provided in the project requirements.

## Project Structure

- `server.js`: Main entry point for the Express server.
- `controllers/stockController.js`: Controller logic for handling stock-related operations.
- `models/stock.js`: Mongoose model for the Stock schema.
- `routes/api.js`: API routes for handling stock-related requests.
- `tests/2_functional-tests.js`: Functional tests using Mocha and Chai.

## Dependencies

- `axios`: For making HTTP requests to the stock price API.
- `express`: Web framework for handling HTTP requests and responses.
- `mongoose`: MongoDB object modeling tool.

## How to Run

1. Install dependencies: `npm install`
2. Set up your MongoDB connection string in the `DB` environment variable.
3. Start the server: `npm start`

## How to Test

1. Install dev dependencies: `npm install --only=dev`
2. Run tests: `npm test`

## Notes

- Ensure that your MongoDB server is running before starting the application.

## Future Improvements

- [List any potential improvements or features to add in the future.]

## Author

Ryan Kamosa

## License

This project is licensed under the [MIT License](LICENSE).

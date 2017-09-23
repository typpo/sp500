sp500
-------

This npm module provides a simple interface to fetch the current price of the S&P500 from the Yahoo Finance API.

# Install

```
npm install sp500
```

# Usage

Basic usage via `fetch`:

```javascript
const sp500 = require('sp500');
sp500.fetch((err, result) => {
  console.log('Current value is:', result);
});

Constant updates via `getMostRecent`:

```javascript
sp500.startPolling(30 * 1000);   // Update every 30 seconds.
// sp500.startPolling();         // Defaults to updating once every 5 min.

// Elsewhere in your app...
setInterval(() => {
  console.log('Updated value:', sp500.getMostRecent().value);    // A Number
  console.log('Updated at:', sp500.getMostRecent().timestamp);   // A JS Date object
}, 30 * 1000);

// Eventually
sp500.stopPolling();
```

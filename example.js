const sp500 = require('./index');
sp500.fetch((err, result) => {
  console.log('Fetched current value:', result);
});

sp500.startPolling(1000);
setInterval(() => {
  console.log('Updated value:', sp500.getMostRecent().value);
}, 1000);

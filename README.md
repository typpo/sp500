snp_500
-------

This npm module provides a simple interface to fetch the current price of the S&P500 from the Yahoo Finance API.

# Install

```
npm install snp500
```

# Usage

```
const snp500 = require('snp500');
snp500.fetch((err, result) => {
  console.log('Current value is:', result);
});

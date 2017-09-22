snp_500
-------

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

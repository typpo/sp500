const snp500 = require('./index');
snp500.fetch((err, result) => {
  console.log('Current value is:', result);
});

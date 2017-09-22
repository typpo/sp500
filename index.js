const http = require('http');

const REGEX = /,([\d\.]+),/;

function fetch(cb) {
  http.get('http://download.finance.yahoo.com/d/quotes.csv?s=^gspc&f=sl1p2', (resp) => {
    let body = '';
    resp.on('data', (d) => {
      body += d;
    });
    resp.on('end', () => {
      const matches = REGEX.exec(body);
      if (!matches || matches.length < 2) {
        cb(new Error('Could not find value in response.'), null);
        return;
      }
      const result = parseFloat(matches[1]);
      cb(null, result);
    });
    resp.on('error', (e) => {
      cb(e, null);
    });
  });
}

module.exports = {
  fetch,
};

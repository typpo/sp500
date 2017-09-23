const http = require('http');

const REGEX = /,([\d\.]+),/;

let mostRecentValue = null;
let mostRecentTime = null;
let pollTimeout = null;

function fetch(cb) {
  http.get('http://download.finance.yahoo.com/d/quotes.csv?s=^gspc&f=sl1p2', (resp) => {
    let body = '';
    resp.on('data', (d) => {
      body += d;
    });
    resp.on('end', () => {
      const matches = REGEX.exec(body);
      if (!matches || matches.length < 2) {
        cb && cb(new Error('Could not find value in response.'), null);
        return;
      }
      const result = parseFloat(matches[1]);
      mostRecentValue = result;
      mostRecentTime = new Date();
      cb && cb(null, result);
    });
    resp.on('error', (e) => {
      cb && cb(e, null);
    });
  });
}

function startPolling(interval = 1000 * 60 * 5) {
  const fn = () => {
    fetch((err) => {
      if (err) {
        throw err;
      }
    });
  };
  fn();
  pollTimeout = setInterval(fn, interval);
}

function stopPolling() {
  clearInterval(pollTimeout);
}

function getMostRecent() {
  return {
    value: mostRecentValue,
    timestamp: mostRecentTime,
  }
}

module.exports = {
  fetch,
  startPolling,
  stopPolling,
  getMostRecent,
};

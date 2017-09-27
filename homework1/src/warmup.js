// Homework 1 Warmup to javascript
// Worked on by Cherrell Finister and Hayato Hori - github(// horihayato)
// +2 extra credit points

const crypto = require('crypto');

function change(amount) {
  if (amount < 0) {
    throw new RangeError('amount cannot be negative');
  }
  const NO_COINS = [0, 0, 0, 0];
  if (amount === 0) {
    return NO_COINS;
  }

  const coin = [25, 10, 5, 1];
  let remaining = amount;
  const result = [];
  coin.forEach((x) => {
    const temp = Math.floor(remaining / x);
    remaining -= (temp * x);
    result.push(temp);
  });

  return result;
}

function stripQuotes(text) {
  let string = text;
  string = string.replace(/['"]/g, '');
  return string;
}

function scramble(word) {
  let scrambled = '';
  const letters = word.split('');
  while (letters.length > 0) {
    scrambled += letters.splice(Math.floor(letters.length * Math.random()), 1);
  }
  return scrambled;
}

function powers(base, limit, callBack) {
  for (let i = 1; i <= limit; i *= base) {
    callBack(i);
  }
}

function* powersGenerator(base, limit) {
  for (let i = 1; i <= limit; i *= base) {
    yield i; // thanks to joey for helping with the yield
  }
}

function say(word) {
  if (word === undefined) {
    return '';
  }
  return function chain(nextWord) {
    if (nextWord) {
      return say(`${word} ${nextWord}`);
    }
    return word;
  };
}

function interleave(x, ...y) {
  const combined = [];
  let combineX = 0;
  let combineY = 0;
  const comLength = x.length + y.length;

  while (combineX + combineY < comLength) {
    if (x[combineX]) {
      combined.push(x[combineX]);
      combineX += 1;
    }
    if (y[combineY]) {
      combined.push(y[combineY]);
      combineY += 1;
    }
  }

  return combined;
}

function cylinder(spec) {
  let { radius = 1, height = 1 } = spec;
  const volume = () => Math.PI * radius * radius * height;
  const surfaceArea = () => (2 * Math.PI * radius * height) + (2 * Math.PI * radius * radius);
  const widen = (widenRadius) => { radius *= widenRadius; };
  const stretch = (stretchHeight) => { height *= stretchHeight; };
  const toString = () => `radius is ${radius} & height is ${height}`;
  return Object.freeze({
    volume,
    surfaceArea,
    widen,
    stretch,
    toString,
    get radius() { return radius; }, // thanks to hayley for helping understanding getters
    get height() { return height; },
  });
}

function makeCryptoFunctions(key, algorithm) {
  return [(data) => {
    const cipher = crypto.createCipher(algorithm, key);
    return cipher.update(data, 'utf-8', 'hex') + cipher.final('hex');
  },
  (data) => {
    const cipher = crypto.createDecipher(algorithm, key);
    return cipher.update(data, 'hex', 'utf-8') + cipher.final('utf-8');
  },
  ];
}

function randomName() {
  // code goes here
}

module.exports = {
  change,
  stripQuotes,
  scramble,
  powers,
  powersGenerator,
  say,
  interleave,
  cylinder,
  makeCryptoFunctions,
  randomName,
};

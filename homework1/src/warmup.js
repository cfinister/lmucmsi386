// Homework 1 Warmup to javascript
// Worked on by Cherrell Finister and Hayato Hori - github(// horihayato)
// +2 extra credit points

function change(amount) {
  if (amount < 0) {
    throw new RangeError('amount cannot be negative');
  }
  const zero = [0, 0, 0, 0];
  if (amount === 0) {
    return zero;
  }

  const coin = [25, 10, 5, 1];
  let remaining = amount;
  for (let i = 0; i < coin.length; i += 1) {
    const temp = Math.floor(remaining / coin[i]); // using temp to help w/ remaining math amounts
    remaining -= (temp * coin[i]);
    coin[i] = temp;
  }

  return coin;
}

function stripQuotes(text) {
  // the gobal flag is used for the function to solve this gobally
  let string = text;
  string = string.replace(/"/g, ''); // thanks to John & Jordan for helping
  string = string.replace(/\\/g, ''); // helped w/ getting to figure out how to use a global flag
  string = string.replace(/'/g, '');

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
  for (let i = 0; base ** i <= limit; i += 1) {
    callBack(base ** i);
  }
}

function* powersGenerator(base, limit) {
  for (let i = 0; base ** i <= limit; i += 1) {
    yield base ** i; // thanks to joey for helping with the yield
  }
}

function say(word) {
  if (word == null) {
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
  let { radius, height } = spec;
  if (radius === undefined) {
    radius = 1;
  }
  if (height === undefined) {
    height = 1;
  }
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

/* function crypto(encrypt, decrypt) {
  // let encrypt = [];
  // let decrypt = [];
} */

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
  // crypto,
  randomName,
};

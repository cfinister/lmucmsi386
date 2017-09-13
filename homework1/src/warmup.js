// Homework 1 Warmup to javascript - now due on Wednesday
// Sept. 15th @ midnight on git hub - do not forget to push!

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
      yield base ** i;
  }
}

function say() {
  const words = [];
  const nextWord = words;
  if (nextWord == null) {
    return '';
  }
  words.push(nextWord);
  return words.join(' ');
}

function interleave() {
  // code goes here
}

function cylinder(radius, height, surfaceArea, volume, widen, stretch) {
  // let c = cylinder;
  // let cylinder = {};
  // //c.surfaceArea() = 0;
  // c.volume() = 0;
  // c.radius = 0;
  // c.height = 0;
  // c.widen() = 0;
  // c.stretch() = 0;
  // c.toString() = 0;
}

function crypto(encrypt, decrypt) {
   const encrypt = [];
   const decrypt = [];
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
  crypto,
  randomName,
};

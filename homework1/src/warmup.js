// Homework 1 Warmup to javascript - now due on Wednesday
//Sept. 13th @ midnight on git hub - do not forget to push!

function change(amount) {
if (amount < 0) {
throw new RangeError('amount cannot be negative');
}

const zero = [0, 0, 0, 0];

  if (amount == 0) {
    return zero;
  }

  let coin = [25, 10, 5, 1];
  var remaining = amount;
  for (i = 0; i < coin.length; i++) {
    var temp = Math.floor(remaining / coin[i]); //using temp to help w/ remaining math amounts
    remaining = remaining - (temp * coin[i]);
    coin[i] = temp;
  }

  return coin;
}

function stripQuotes(text) {
  //the gobal flag is used for the function to solve this gobally
  let string = text;
    string = string.replace(/"/g,''); //thanks to John & Jordan for helping
    string = string.replace(/\\/g,''); //helped w/ getting to figure out how to use a global flag
    string = string.replace(/'/g,'');

    return string;
}

function scramble(word) {
  var scramble = '';
    word = word.split('');
    while (word.length > 0) {
      scramble +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return scramble;
};

function powers(base,limit,callBack) {
//code goes here
};

function powersGenerator() {
//code goes here
};

function say() {
//code goes here
};

function interleave() {
  //code goes here
};

function cylinder() {
//code goes here
};

function encrypt() {
//this one goes with function decrypt
};

function decrypt() {
//this one goes with function encrypt
};

function randomName () {
//code goes here
};

module.exports = {
change,stripQuotes,scramble,powers,powersGenerator,say,interleave,cylinder,encrypt,decrypt,randomName,
};

// Homework 1 Warmup to javascript - now due on Wednesday
//Sept. 13th @ midnight on git hub - do not forget to push!

function change(amount) {
if (amount < 0) {
throw new RangeError('amount cannot be negative');
}
const result =[];
let remaining = amount;
[25, 10, 5, 1].forEach((coin) => {
amount = Math.floor(remaining / coin);
remaining %= coin;
});
return result;
}

function stripQuotes(text) {
  var text = ("");
  if (text!= '') {
  var str1 = text.replace(/\,/g,"");
  }
};

function scramble() {
  var scramble = '';
      word = word.split('');
      while (word.length > 0) {
        scramble +=  word.splice(word.length * Math.random() << 0, 1);
      }
      return scramble;
};

function powers() {
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

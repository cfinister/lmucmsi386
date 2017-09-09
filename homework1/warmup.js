// cherrell homework goes here

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

module.exports = {
change,
};

/*function stripQuotes(text) {
  var text = ("");
  if (text!= '') {
    var str1 = text.replace(/\,/g,"");
  }
}; */

function scramble() {
  var scramble = '';
      word = word.split('');
      while (word.length > 0) {
        scramble +=  word.splice(word.length * Math.random() << 0, 1);
      }
      return scramble;
};

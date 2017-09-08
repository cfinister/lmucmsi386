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

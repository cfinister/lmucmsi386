// Homework 1 Warmup to javascript - now due on Wednesday
//Sept. 13th @ midnight on git hub - do not forget to push!

function change(amount) {
if (amount < 0) {
throw new RangeError('amount cannot be negative');
}
const result =[0, 0, 0, 0];
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

function scramble(strInput) {
  var inpArr = strInput.split("");
  var arrRand = [];
  var arrTempInd = [];
  var max = inpArr.length;
  var min = 0;
  var tempInd;
  var i =0 ;

    do{
        tempInd = Math.floor(Math.random() * (max - min));
        if(arrTempInd.indexOf(tempInd)<0){
        arrRand[i] = inpArr[tempInd];
        arrTempInd.push(tempInd);
        i++;
          }
      }
    while(arrTempInd.length < max){
      return arrRand.join("").toString();
  }
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

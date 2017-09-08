// cherrell homework goes here

<<<<<<< HEAD
function change(amount) {
  let result =[]
  [25, 10, 5, 1].forEach(coin => {
    amount = Math.floor(amount / coin); 
    result.push(amount % coin); 
  }); 
  return result;
}; 
=======
exports.change = () => { 
  return [0, 0, 0, 0];
}
>>>>>>> 04376ec270b523fc992e0d67dc0505ff9247a796

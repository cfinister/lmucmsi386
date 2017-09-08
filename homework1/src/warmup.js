// cherrell homework goes here

function change(amount) {
  let result =[]
  [25, 10, 5, 1].forEach(coin => {
    amount = Math.floor(amount / coin); 
    result.push(amount % coin); 
  }); 
  return result;
}; 

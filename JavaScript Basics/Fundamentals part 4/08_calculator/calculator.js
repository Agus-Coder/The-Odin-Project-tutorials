const add = function() {
	let first = arguments[0];
  let second = arguments[1];
  let final = first + second;
  return final;
};

const subtract = function() {
  let first = arguments[0];
  let second = arguments[1];
  let final = first - second;
  return final;
};

const sum = function() {
  let final = 0;
  let array = arguments[0]
  let long = array.length;  

	for (i=0; i<= (long - 1) ;i++){
    final += array[i];
  }
  
  return final
};

const multiply = function() {
  let final = 1;
  let array = arguments[0]
  let long = array.length;  

	for (i=0; i<= (long - 1) ;i++){
    final *= array[i];
  }
  
  return final

};

const power = function() {
  let first = arguments[0];
  let second = arguments[1];
  let final = first**second;
  return final;
};

const factorial = function() {
	let final = 1
  for (i=1; i<=arguments [0]; i++){
    final *= i
  }
  return final

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

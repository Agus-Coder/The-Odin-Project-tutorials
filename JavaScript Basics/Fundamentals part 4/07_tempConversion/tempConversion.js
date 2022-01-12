const ftoc = function() {

  let input = arguments[0];
  let output = (input - 32) *(5/9);
  let finalOutput = parseFloat(output.toFixed(1))

  return finalOutput;

};

const ctof = function() {

  let input = arguments[0];
  let output = input * (9/5) + 32;
  let finalOutput = parseFloat(output.toFixed(1))

  return finalOutput;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

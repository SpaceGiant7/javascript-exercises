const add = function(n1, n2) {
	return n1+n2
};

const subtract = function(n1, n2) {
    	return n1 - n2
};

const sum = function(nums) {
	let result = 0;
    for (const i of nums) {
        result = result + parseInt(i);
    }
    return result;
};

const multiply = function(nums) {
    let result = 1;
    for (const i of nums) {
        result = result * parseInt(i);
    }
    return result;
};

const power = function(base, exponent) {
	return multiply(Array(exponent).fill(base));
};

const factorial = function(n) {
	let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
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

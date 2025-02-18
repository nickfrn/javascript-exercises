const add = function(num1, num2) {
	  return num1 + num2;
};

const subtract = function(num1, num2) {
	  return num1 - num2;
};

const sum = function(numsArr) {
    if (numsArr.length < 1) {
        return 0;
    } else {
      const numsSum = numsArr.reduce((total, currentNum) => {
        return total += currentNum;
      });

      return numsSum;
    }
};

const multiply = function(numsArr) {
  const numsProduct = numsArr.reduce((total, currentNum) => {
    return total * currentNum;
  });

  return numsProduct;
};

const power = function(num1, num2) {
    return num1 ** num2;
}

const factorial = function(num) {
    let result = 1;

    if (num == 0) {
        return result;
    } else {
        for (let i = num; i > 0; i--) {
          result *= i;
        }

        return result;
    }
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

const roundToOne = function(number) {
    return Math.round(number * 10) / 10;
};

const convertToCelsius = function(input) {
    return roundToOne((input - 32) * 5 / 9);
};

const convertToFahrenheit = function(input) {
    return roundToOne(input * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

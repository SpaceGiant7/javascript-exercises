const reverseString = function(input) {
    let output = "";
    for (const c of input) {
        output = c + output;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;

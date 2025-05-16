const isPunctuation = function(char) {
    return "!,. ".includes(char)
}

const isNumber = function(char) {
    let numberResult = parseInt(char)
    return !isNaN(numberResult)
}

const palindromes = function (input) {
    let result = "";
    let modifiedInput = "";
    for (const c of input) {
        if (!isPunctuation(c)) {
            if (!isNumber(c)) {
                result = c.toLowerCase() + result;
                modifiedInput = modifiedInput + c.toLowerCase();
            } else {
                result = c + result;
                modifiedInput = modifiedInput + c;
            }
        }
    }
    console.log(result)
    console.log(modifiedInput)
    return result === modifiedInput;
};

// Do not edit below this line
module.exports = palindromes;

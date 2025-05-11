const sumAll = function(start, end) {
    let output = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }
    for (let i = start; i <= end; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;

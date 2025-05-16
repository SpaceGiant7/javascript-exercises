const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    let lowest = 0;
    let highest = 0;
    for (let i = 0; i < n; i++) {
        let temp = lowest + highest;
        lowest = highest;
        highest = temp;
        if (i === 0) {
            highest = 1;
        }
    }
    return highest
};

// Do not edit below this line
module.exports = fibonacci;

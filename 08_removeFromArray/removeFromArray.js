const removeFromArray = function(arr, ...args) {
    let output = [];
    for (const a of arr) {
        let isHit = false;
        for (const b of args) {
            if (a === b) {
                isHit = true;
            }
        }
        if (!isHit) {
            output.push(a);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;

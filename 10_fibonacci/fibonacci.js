const fibonacci = function(index) {
    let sequence = [0, 1];

    if (+index < 0) {
        return 'OOPS';
    } else {
        for(let i = 2; i <= index; i++) {
            sequence[i] = sequence[i - 2] + sequence[i - 1];
        }

        return sequence[index];
    }
};

// Do not edit below this line
module.exports = fibonacci;

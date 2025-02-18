const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleanString = string
        .toLowerCase()
        .split('')
        .filter(char => alphanumerical.includes(char))
        .join('');

    let reversedString = cleanString.split('').reverse().join('');

    return reversedString === cleanString;
};

// Do not edit below this line
module.exports = palindromes;

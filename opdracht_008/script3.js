const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => (total + n)) / numbers.length;
    return average;
};

const numbers = [3, 8, 1, 1, 1];
console.log(Math.round(calculateAverage(numbers)));
// function that produce something

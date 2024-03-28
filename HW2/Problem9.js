function createCalculator(initialValue) {
    const calculator = {
        add: function (value) {
            return initialValue + value;
        },
        subtract: function (value) {
            return initialValue - value;
        },
        multiply: function (value) {
            return initialValue * value;
        },
        divide: function (value) {
            return initialValue / value;
        },
    };
    return calculator;
}
console.log(createCalculator(2).add(2));

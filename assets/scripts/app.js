const defaultResult = 22;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
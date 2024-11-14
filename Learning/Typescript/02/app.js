"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || (resultConversion === 'as number')) {
        result = (+input1) + (+input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
let combinedNumbers = combine(34, 56, 'as number');
let combinedStringNumbers = combine('34', '56', 'as number');
let combinedNames = combine('Vaibhav', ' Arnav', 'as string');
console.log(`The result of combination of numbers, string numbers and names respectively: '${combinedNumbers}', '${combinedStringNumbers}' and '${combinedNames}'`);

console.time('time'); // useful to calculate the time js is taking to load
console.log('Hello World');
console.log({ name: 'Vaibhav', role: 'entrepreneur', company_revenue: 1000000000000 });
console.table({ name: 'Vaibhav', role: 'entrepreneur', company_revenue: 1000000000000 });
console.warn('This is a Warning!');
// console.clear();
var age = 15;
console.assert(age >= 18, 'Not Eligible!'); // throws ERROR 'Assertion failed: Not Eligible!' if the age is less than 18
console.error('->>ERROR<<-');
console.timeEnd('time');
let jsonObject = {
    name: 'Vaibhav',
    age: '19',
    id: 132348934
}
console.log(jsonObject);

let myJsonStr = JSON.stringify(jsonObject); // converts the given JS object to a JSON string
console.log(myJsonStr);

myJsonStr = myJsonStr.replace('Vaibhav', 'Arnav');
myJsonStr = myJsonStr.replace('19', '13');
myJsonStr = myJsonStr.replace(132348934, 96778546);
console.log(myJsonStr);

let newJsonObject = JSON.parse(myJsonStr); // converts a valid JSON string to a JS object
console.log(newJsonObject);
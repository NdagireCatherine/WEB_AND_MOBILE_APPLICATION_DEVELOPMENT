//approxinating
const checkApprox = (num_1, num_2, epsilon = 0.004) => {
    return Math.abs(num_1-num_2) < epsilon;
}
console.log(checkApprox(0.003, 0.03));

//calculating current milliseconds
let currentMilliseconds = Date.now();
console.log(currentMilliseconds);

//spliting words
let text = "Hey How are you";
let result = text.split(" ");
console.log(result);

//playing items in an array using object.values
const person = {
    name: 'Catherine',
    age: 20,
    job: 'Data Scientist'
};
const values = Object.values(person);
console.log(values)

//an arrow function
const add = (a, b) => a + b;
console.log(add(5, 5))


//ternery operator
let age = 25;
let answer = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(answer);
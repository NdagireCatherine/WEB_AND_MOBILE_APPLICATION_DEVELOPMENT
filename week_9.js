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

//playing items in an array
const person = {
    name: 'Catherine',
    age: 20,
    job: 'Data Scientist'
};
const values = Object.values(person);
console.log(values)
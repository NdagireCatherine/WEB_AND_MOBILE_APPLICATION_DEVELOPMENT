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



//fibonacci series
const number = parseInt(prompt('Enter the number of terms: '));
let n1=0, n2=1, nextTerm;
console.log('Fibonacci Series:');

for(let i=1; i<=number; i++){
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm
}


//largest number
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

if(num1 >= num2 && num1 >= num3){
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3){
    largest = num2;
}
else{
    largest = num3;
}
console.log("The largest number is" + largest)


//convert from celsius
const celsius = prompt("Enter a celsius value:");
const fahrenheit = (celsius*1.8)+32
console.log("Fahrenheit:" + fahrenheit)
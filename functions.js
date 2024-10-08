//life before functions
var num = 23;

var num_two = 2;
var sum = num + num_two;
console.log("Sum:", sum);

var num_three = 40;
var num_four = 4;
var sum_two = num_three+num_four;
console.log("Sum_two:", sum_two);


//functions without parameters/ arguments
//void function
function summation(){
    var num_five = 40;
    var num_six = 4;
    var sum_three = num_five+num_six;
    console.log("Sum_three:", sum_three);
}
//this specific function is a void function(One does not have a return function)
summation()


//Returning function
function summation_two(){
    var num_five = 40;
    var num_six = 4;
    var sum_three = num_five+num_six;
    return sum_three;
}
//Use it by printing the value directly on the terminal
console.log("Sum_four:",summation_two());

//Assigning the value to a variable
var sum_four = summation_two();

var sum_five = summation();
console.log(sum_five);
//you can not return a void function it will bring undefined


//Functions with parameters
function summation_three(num_five,num_six){
    var sum_six = num_five + num_six;
    console.log("Sum_six:", sum_six);
}
summation_three(40, 4);
summation_three(100, 4);
summation_three(62, 4);


//Returning function with parameters
function summation_four(num_five, num_six){
    return num_five + num_six;
}
console.log("Sum_five:",summation_four(23, 5));


function name_greeting(names){ 
    console.log("Gyebaleko",names);
}
name_greeting("Cathy")


//function calculateProfit
function calculateProfit(SP, CP, units){
    selling_price = units*SP
    cost_price = units*CP
    profit = selling_price-cost_price
    return profit
}
SP=9000
CP=5000
units=5
console.log("Profit:", calculateProfit(SP, CP, units))
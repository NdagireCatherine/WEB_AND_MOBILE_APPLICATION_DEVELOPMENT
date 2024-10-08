let num;
do{
  num = parseInt(prompt("Enter a number between 1 and 10:"));
  if(isNaN(num) || num < 1 || num > 10){
    console.log("Invalid number. Please try again.");
  }
} while (isNaN(num) || num < 1 || num > 10);
console.log(`You entered a valid number: ${num}`)
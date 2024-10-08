//creating a variable queen_name
let queen_name = "Cathy";

//creating a variable completedChallenge
let completedChallenges = 0;

//adding 1 to the completedChallenge
completedChallenges += 1;
console.log(completedChallenges);

//creating a function in print
function celebrateWin() {
    console.log("You did it, Queen!")
}
celebrateWin();

//updating the function created
//adding an argument
function celebrateWin(challengeName) {
    console.log("Challenge:", challengeName, "completed!")
    console.log("Time to take on the next challenge")
}
celebrateWin("Fire Challenge");


//for loop that works from 1 to 3
for(let i=1; i <= 3; i++) {
    console.log("Challenge", i, "solved!")
}

//conditionals
let nextChallenge = "loops"

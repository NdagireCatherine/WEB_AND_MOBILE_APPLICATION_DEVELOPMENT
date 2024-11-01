const checkApprox = (num_1, num_2, epsilon = 0.004) => {
    return Math.abs(num_1-num_2) < epsilon;
}

console.log(checkApprox(0.003, 0.03));


let currentMilliseconds = Date.now();
console.log(currentMilliseconds)
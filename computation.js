
function computation(value1, value2, operation){
    if (operation === "add"){
        console.log(`${value1} + ${value2} = ${value1+value2}`);
    }else if (operation === "subtract"){
        console.log(`${value1} - ${value2} = ${value1-value2}`);
    }else if (operation === "multiply"){
        console.log(m`${value1} x ${value2} = ${value1*value2}`)
    }else if(operation === "divide") {
        if (value2 === 0) {
            console.log("Division by zero is not allowed.");
        } else {
            console.log(`${value1}/${value2} = ${value1/value2}`);
        }
    } else {
        console.log("Invalid operation. Choose either add, subtract, multiply, or divide");
    }
}

computation(2,3,"add")


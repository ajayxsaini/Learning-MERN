function sum(num1, num2, fnToCall){
    let result = num1 + num2
    fnToCall(result)
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is : " + data);
    
}


//how to get to display sum by only getting just one function
//This is a callback
const ans = sum(1,2, displayResult)


function calculateArithmetic(a, b, arithmaticFInalFn){
    const value = arithmaticFInalFn(a,b)
    return value
}


function sum(a,b){
    return a+b
}

function subtract(a,b){
    return a-b 
}
const value = calculateArithmetic(1,2,sum)
console.log(value);
const value1 = calculateArithmetic(1,2,subtract)
console.log(value1);

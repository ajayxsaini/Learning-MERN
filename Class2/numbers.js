//parseInt()
function explainParseInt(value){
    console.log("Original value", value);
    let result = parseInt(value)                //it will parse the value given to it and will give the integer part back
    console.log("After parseInt: ", result);   
}

explainParseInt("42")
explainParseInt("42px") 
explainParseInt("3.14")

const defaultResult = 10;
let currentResult = defaultResult;
let logList = []
let detailLogEntries = [];
//currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = "";
function formObject(type, defaultResult, userInput, currentResult) {
    let logEntry = {
        operator: type,
        InitialValue: defaultResult,
        EnteredValue: userInput,
        result: currentResult
    }
    detailLogEntries.push(logEntry)

}


function calculation (type){


   if(userInput.value!==""&&!isNaN(userInput.value)){
    if(userInput.value!=0){
        let backup = currentResult
        console.log(currentResult)
     
    
        if(type==="ADD"){
            calculationDescription = `${currentResult} + ${parseInt(userInput.value)}`
            currentResult += parseInt(userInput.value)
            outputResult(currentResult, calculationDescription);
            logList.push(calculationDescription)
            formObject(type, backup, userInput.value, currentResult)
    
        }else if(type==='SUB'){
            calculationDescription = `${currentResult} - ${parseInt(userInput.value)}`
            currentResult -= parseInt(userInput.value)
            outputResult(currentResult, calculationDescription);    
            logList.push(calculationDescription)
            formObject(type, backup, userInput.value, currentResult)
    
        }else if(type==='MULTIPLY'){
            calculationDescription = `${currentResult} * ${parseInt(userInput.value)}`
    
            currentResult *= parseInt(userInput.value)
            outputResult(currentResult, calculationDescription);    
            logList.push(calculationDescription)
            formObject(type, backup, userInput.value, currentResult)
    
        }else if(type==='DIVIDE'){
            calculationDescription = `${currentResult} / ${parseInt(userInput.value)}`
            currentResult /= parseInt(userInput.value)
            outputResult(currentResult, calculationDescription);
            logList.push(calculationDescription)
        
            formObject('DIVIDE', backup, userInput.value, currentResult)
        }else if(type==='MODULUS'){
            calculationDescription = `${currentResult} % ${parseInt(userInput.value)}`
    
            currentResult = defaultResult % parseInt(userInput.value)
            outputResult(currentResult, calculationDescription);
        
            logList.push(calculationDescription)
            formObject('MODULUs', backup, userInput.value, currentResult)
        
        }else if(type==='EXPONENTIAL'){
            calculationDescription = `${currentResult} ** ${parseInt(userInput.value)}`
    
            currentResult = defaultResult ** parseInt(userInput.value)
            outputResult(currentResult, calculationDescription);
        
            formObject('EXPONENTIAL', backup, userInput.value, currentResult)
        }
    }
   } else{
    if(isNaN(userInput.value)){
        alert(`${userInput.value} is not a number`)
        userInput.value=""
    }else{
        alert("please enter a value")
    }
}

   
   


}

function add() {
    if(userInput.value!==""&&!isNaN(userInput.value)){
        calculation('ADD')
    }else{
        if(isNaN(userInput.value)){
            alert(`${userInput.value} cannot be added with ${currentResult}`)
            userInput.value=""
        }else{
            alert("please enter a value")
        }
    }
 
    // let backup = currentResult
    // console.log(currentResult)
    // calculationDescription = `${currentResult} + ${parseInt(userInput.value)}`

    // currentResult += parseInt(userInput.value)
    // outputResult(currentResult, calculationDescription);
    // formObject('ADD', backup, userInput.value, currentResult)

    // logList.push(calculationDescription)

    // console.log(logList, "logList")
    // console.log(detailLogEntries, "detailLogEntries")
}

function subtract() {
    if(userInput.value!==""&&!isNaN(userInput.value)){
        calculation('SUB')
    }else{
        if(isNaN(userInput.value)){
            alert(`${userInput.value} cannot be subracted from ${currentResult}`)
            userInput.value=""
        }else{
            alert("please enter a value")
        }
    }
 
    // let backup = currentResult
    // console.log(currentResult)
    // calculationDescription = `${currentResult} - ${parseInt(userInput.value)}`

    // currentResult -= parseInt(userInput.value)
    // outputResult(currentResult, calculationDescription);

    // formObject('SUB', backup, userInput.value, currentResult)

    // logList.push(calculationDescription)

   
    // console.log(logList, "logList")
    // console.log(detailLogEntries, "detailLogEntries")
}

function multiply() {

    if(userInput.value!==""&&!isNaN(userInput.value)){
        calculation('MULTIPLY')
    }else{
        if(isNaN(userInput.value)){
            alert(`${userInput.value} cannot be multiplied with ${currentResult}`)
            userInput.value=""
        }else{
            alert("please enter a value")
        }
    }
    // let backup = currentResult
    // calculationDescription = `${currentResult} * ${parseInt(userInput.value)}`

    // currentResult *= parseInt(userInput.value)
    // outputResult(currentResult, calculationDescription);

    // formObject('MULTIPLY', backup, userInput.value, currentResult)

    // logList.push(calculationDescription)

   
    // console.log(logList, "logList")
    // console.log(detailLogEntries, "detailLogEntries")
}

function divide() {
   
    if(userInput.value!==""&&!isNaN(userInput.value)){
        calculation('DIVIDE')
    }else{
        if(isNaN(userInput.value)){
            alert(`${userInput.value} cannot be divided by ${currentResult}`)
            userInput.value=""
        }else{
            alert("please enter a value")
        }
    }
    // let backup = currentResult
    // calculationDescription = `${currentResult} / ${parseInt(userInput.value)}`

    // currentResult /= parseInt(userInput.value)
    // outputResult(currentResult, calculationDescription);
    // logList.push(calculationDescription)

    // formObject('DIVIDE', backup, userInput.value, currentResult)
   
    // console.log(logList, "logList")
    // console.log(detailLogEntries, "detailLogEntries")
}
function modulus() {
   

    if(userInput.value!==""&&!isNaN(userInput.value)){
        calculation('MODULUS')
    }else{
        if(isNaN(userInput.value)){
            alert(`${userInput.value} cannot be calculated with ${currentResult}`)
            userInput.value=""
        }else{
            alert("please enter a value")
        }
    }

    // let backup = currentResult
    // calculationDescription = `${currentResult} % ${parseInt(userInput.value)}`

    // currentResult = defaultResult % parseInt(userInput.value)
    // outputResult(currentResult, calculationDescription);

    // logList.push(calculationDescription)
    // formObject('MODULUs', backup, userInput.value, currentResult)

   
    // console.log(logList, "logList")
    // console.log(detailLogEntries, "detailLogEntries")
}

function exponentional() {
 
    if(userInput.value!==""&&!isNaN(userInput.value)){
        calculation('EXPONENTIAL')
    }else{
        if(isNaN(userInput.value)){
            alert(`${userInput.value} cannot be calculated with ${currentResult}`)
            userInput.value=""
        }else{
            alert("please enter a value")
            
        }
    }
    // let backup = currentResult
    // calculationDescription = `${currentResult} ** ${parseInt(userInput.value)}`

    // currentResult = defaultResult ** parseInt(userInput.value)
    // outputResult(currentResult, calculationDescription);

    // formObject('EXPONENTIAL', backup, userInput.value, currentResult)

    // logList.push(calculationDescription)

   
    // console.log(logList, "logList")
    // console.log(detailLogEntries, "detailLogEntries")
}

function ResetAll() {
    currentResult = 0
    calculationDescription = ""
    userInput.value=""
    currentCalculationOutput.value=0
    outputResult(currentResult, calculationDescription);
   
}


addBtn.addEventListener('click',  calculation.bind(this,'ADD'))
subtractBtn.addEventListener('click', calculation.bind(this,'SUB'))
multiplyBtn.addEventListener('click', calculation.bind(this,'MULTIPLY'))
divideBtn.addEventListener('click', calculation.bind(this,'DIVIDE'))
modulo.addEventListener('click', calculation.bind(this,'MODULUS'))
expo.addEventListener('click', calculation.bind(this,'EXPONENTIAL'))
Rest.addEventListener('click', ResetAll)

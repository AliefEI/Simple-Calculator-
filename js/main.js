

//assign varible to signs class
document.querySelector('#add').addEventListener('click', fxAdd)
document.querySelector('#subtract').addEventListener('click', fxSub)
document.querySelector('#multiply').addEventListener('click', fxMultiply)
document.querySelector('#divide').addEventListener('click', fxDivide)


///create function 
function fxAdd (){
    //get number from #factor1
    let num1=parseInt(document.querySelector('#factor1').value)
    //get number from #factor2
    let num2=parseInt(document.querySelector('#factor2').value)
    total= num1+num2 
    document.querySelector('#placeToPutResult').innerText= total
}

function fxSub (){
    //get number from #factor1
    let num1=parseInt(document.querySelector('#factor1').value)
    //get number from #factor2
    let num2=parseInt(document.querySelector('#factor2').value)
    total = num1 - num2
    document.querySelector('#placeToPutResult').innerText= total
}

function fxMultiply (){
    //get number from #factor1
    let num1=parseInt(document.querySelector('#factor1').value)
    //get number from #factor2
    let num2=parseInt(document.querySelector('#factor2').value)
    total = num1 * num2
    document.querySelector('#placeToPutResult').innerText= total
}
function fxDivide (){
    //get number from #factor1
    let num1=parseInt(document.querySelector('#factor1').value)
    //get number from #factor2
    let num2=parseInt(document.querySelector('#factor2').value)
    total = num1 / num2
    document.querySelector('#placeToPutResult').innerText= total
}
////get answer to #placeToPutResult 


//get number from #factor1
//let num1=document.getElementById('factor1').value;
//get number from #factor2
//let num2=document.getElementById('factor2').value;
let varOne = "";
let varOperator = "";
let varTwo = "";
let varTwoEnabled=false;

const numbers = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator"));
const equal = document.getElementById("=");
const clearing = document.getElementById("clearing");
const del = document.getElementById("del");
const display = document.querySelector("div");
const point = document.getElementById(".");

point.addEventListener("click", ()=>{
    if(varTwoEnabled!=true){
        varOne += ".";
        display.textContent=varOne;
    }

    else if (varOperator.length != 0 && varTwoEnabled==true) {
        varTwo += ".";
        display.textContent=varOne + varOperator + varTwo;
    }

    point.disabled=true;
});

del.addEventListener("click", ()=>{
    if (varTwo.length != 0){
        if (varTwo.at(-1)=="."){point.disabled=false};
        varTwo = String(varTwo).substring(0, varTwo.length-1);
        display.textContent=varOne + varOperator + varTwo;
    }

    else if (varTwo.length==0 && varOperator.length!=0){
        varOperator = "";
        varTwoEnabled=false;
        display.textContent=varOne;
        if (String(varOne).includes(".")) {point.disabled=true};
    }

    else if (varOne.length!=0){
        if (varOne.at(-1)=="."){point.disabled=false};
        varOne = String(varOne).substring(0, varOne.length-1);
        display.textContent=varOne;
    }
});

numbers.forEach((x)=>x.addEventListener("click", ()=>{
    if(varTwoEnabled==false){
        varOne += x.id; 
        console.log(varOne)
        display.textContent=varOne;
    }

    else{
        varTwo += x.id;
        console.log(varTwo);
        display.textContent=varOne + varOperator + varTwo;
    }
}));

operators.forEach((x)=>x.addEventListener("click", ()=>{
    if (varOperator.length==0){
        if(varTwoEnabled==false){
            varTwoEnabled=true;
            point.disabled=false;
            varOperator=x.id;
            console.log(varOperator);
        }
        display.textContent=varOne + varOperator;
    }
}));

equal.addEventListener("click", ()=>Assigning(varOne, varOperator, varTwo));

clearing.addEventListener("click", ()=>ClearingFunction());

Addition = function(a,b){
    ClearingFunction();
    varOne=parseFloat(a)+parseFloat(b);
    if (String(varOne).includes(".")){point.disabled=true};
    display.textContent=`${varOne}`;
}

Multiplication = function(a,b){
    ClearingFunction();
    varOne=parseFloat(a)*parseFloat(b);
    if (String(varOne).includes(".")){point.disabled=true};
    display.textContent=`${varOne}`;
}

Substraction = function(a,b){
    ClearingFunction();
    varOne=parseFloat(a)-parseFloat(b);
    if (String(varOne).includes(".")){point.disabled=true};
    display.textContent=`${varOne}`;
}

Division = function (a,b){
    ClearingFunction();
    varOne=parseFloat(a)/parseFloat(b);
    if (String(varOne).includes(".")){point.disabled=true};
    display.textContent=`${varOne}`;
}

ClearingFunction = function (){
    varOne = "";
    varTwo = "";
    varOperator="";
    varTwoEnabled=false;
    point.disabled=false;
    display.textContent="0";
}

Assigning = function(n1, op, n2){
    if(op=="+"){
        Addition(n1, n2);
        op="";
    }

    else if (op=="*"){
        Multiplication(n1, n2);
        op="";
    }

    else if (op=="/"){
        Division(n1, n2);
        op="";
    }

    else if (op=="-"){
        Substraction(n1, n2);
        op="";
    }
}




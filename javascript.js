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
const negative = document.getElementById("negative");

negative.addEventListener("click", ()=>{
    if(varTwoEnabled==false){               //We make the first number negative by clicking if there is no second number and operator
        varOne = OppositeConverter(varOne);
        display.textContent=varOne;
    }

    else if (varTwoEnabled==true && varOperator.length != 0){   //Else if there's a second number, we compute its opposite
        varTwo = OppositeConverter(varTwo);
        display.textContent=varOne+varOperator+varTwo;
    }
        
})

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
    if (varTwo.length != 0){                                    //If the second variable is non-empty, we delete from there first
        if (varTwo.at(-1)=="."){point.disabled=false};
        varTwo = varTwo.substring(0, varTwo.length-1);
        display.textContent=varOne + varOperator + varTwo;
    }

    else if (varTwo.length==0 && varOperator.length!=0){       //If the 2nd var is empty but the operator non-empty, we delete the operator
        varOperator = "";
        varTwoEnabled=false;
        display.textContent=varOne;
        if (varOne.includes(".")) {point.disabled=true};
    }

    else if (varOne.length!=0){                                 //Else, we delete a character from the first member
        if (varOne.at(-1)=="."){point.disabled=false};
        varOne = varOne.substring(0, varOne.length-1);
        display.textContent=varOne;
    }
});

numbers.forEach((x)=>x.addEventListener("click", ()=>{
    if(varTwoEnabled==false){
        varOne += x.id; 
        display.textContent=varOne;
    }

    else{
        varTwo += x.id;
        display.textContent=varOne + varOperator + varTwo;
    }
}));

operators.forEach((x)=>x.addEventListener("click", ()=>{
    if (varOperator.length==0){ //The button works only if there is no operator active i.e the operator string is empty
        if(varTwoEnabled==false){
            varTwoEnabled=true;     //All imput right of the operator is now stored in a second variable
            point.disabled=false;   //We alllow the user to to add "." to the second number
            varOperator=x.id;       
        }
        display.textContent=varOne + varOperator;
    }
}));

equal.addEventListener("click", ()=>Assigning(varOne, varOperator, varTwo)); //When we click on "equal" => calls assigning function

clearing.addEventListener("click", ()=>ClearingFunction());                 //Clicking on "C" reset data

Addition = function(a,b){
    ClearingFunction();
    varOne=String(Math.round((parseFloat(a)+parseFloat(b))*100)/100);
    if (varOne.includes(".")){point.disabled=true};                        //If the result already contains a ".", we don't allow the user to add another
    display.textContent=`${varOne}`;
}

Multiplication = function(a,b){
    ClearingFunction();
    varOne=String(Math.round((parseFloat(a)*parseFloat(b))*100)/100);
    if (varOne.includes(".")){point.disabled=true};
    display.textContent=`${varOne}`;
}

Substraction = function(a,b){
    ClearingFunction();
    varOne=String(Math.round((parseFloat(a)-parseFloat(b))*100)/100);
    if (varOne.includes(".")){point.disabled=true};
    display.textContent=`${varOne}`;
}

Division = function (a,b){
    if (b==0){  
        ClearingFunction();
        display.textContent="ERROR";
    }

    else{
        ClearingFunction();
        varOne=String(Math.round((parseFloat(a)/parseFloat(b))*100)/100);
        if (varOne.includes(".")){point.disabled=true};
        display.textContent=`${varOne}`;
    }
}

ClearingFunction = function (){     //Reset data
    varOne = "";
    varTwo = "";
    varOperator="";
    varTwoEnabled=false;
    point.disabled=false;
    display.textContent="0";
}

Assigning = function(n1, op, n2){   //Depending on the value of "op", apply the right operation
    if (n2.length != 0){    //Executed only if there is a second member
        if(op=="+"){Addition(n1, n2);}
        else if (op=="*"){Multiplication(n1, n2);}
        else if (op=="/"){Division(n1, n2);}
        else if (op=="-"){Substraction(n1, n2);}
    }
}

OppositeConverter = function(x){       

    if (x.at(0) != "-"){ x = "-" + x;}   //If the number is positive, make it negative

    else if (x.at(0) == "-"){   //If the number is negative, make it negative
        new_string = x.replace('-', '');
        x = new_string;
    }

    return x;
}



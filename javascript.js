const myNumbers = Array.from(document.getElementsByClassName("number"));
const myOperators = Array.from(document.getElementsByClassName("operator"));
const equal = document.getElementById("=");
const clearing = document.getElementById("clearing");
const div = document.querySelector("div");
const del = document.getElementById("del");
const point = document.getElementById(".");

let string_to_evaluate = "";
let operatorClickingNumber = 0; //Operator count, if it reaches two we directly proceed to the operation 
div.textContent="0";

ConcatenationFunction = function(inputValue){   // Function that concatenate the user input
    string_to_evaluate += inputValue;
    console.log(string_to_evaluate);
    div.textContent=string_to_evaluate;
}

AssigningFunction = function(){               //Function that splits and then call the right function depending on the operation

    if (string_to_evaluate.includes("+")){
        arraysOfString = string_to_evaluate.split('+');
        AdditionFunction(parseFloat(arraysOfString[0]), parseFloat(arraysOfString[1]));
    }

    else if (string_to_evaluate.includes("*")){
        arraysOfString = string_to_evaluate.split('*');
        MultiplicationFunction(parseFloat(arraysOfString[0]), parseFloat(arraysOfString[1]));
    }

    else if (string_to_evaluate.includes("/")){
        arraysOfString = string_to_evaluate.split('/');
        DivisionFunction(parseFloat(arraysOfString[0]), parseFloat(arraysOfString[1]));
    }

    else{ //Substraction
        arraysOfString = string_to_evaluate.split("-");
        SubstractFunction(parseFloat(arraysOfString[0]), parseFloat(arraysOfString[1]));
    }

}

AdditionFunction = function(a,b){
    console.log(a+b);
    operatorClickingNumber=0;
    string_to_evaluate = "" + (a+b);
    div.textContent=string_to_evaluate;
}

SubstractFunction = function(a,b){
    console.log(a-b);
    operatorClickingNumber=0;
    string_to_evaluate = "" + (a-b);
    div.textContent=string_to_evaluate;
}

MultiplicationFunction = function(a,b){
    console.log(a*b);
    operatorClickingNumber=0;
    string_to_evaluate = "" + (a*b);
    div.textContent=string_to_evaluate;
}

DivisionFunction = function (a,b){

    operatorClickingNumber=0;

    if (b==0){
        div.textContent = "ERROR";
    }

    else{
        console.log(a/b);
        string_to_evaluate = "" + (a/b);
        div.textContent=string_to_evaluate;
    }
}

ClearingFunction = function(){
    string_to_evaluate="";
    div.textContent="0";
    operatorClickingNumber=0;
    point.disabled=false;
}

myNumbers.forEach((number)=>{   //Concatenate NUMBERS on click
    number.addEventListener("click", ()=>{
            ConcatenationFunction(number.id);
        });
});

myOperators.forEach((operator)=>{   //Concatenate OPERATORS on click
    operator.addEventListener("click", ()=>{
            ++operatorClickingNumber;
            point.disabled=false;
            if (operatorClickingNumber==2){
                    operatorClickingNumber=0;
                    AssigningFunction();
            }
            else{
                ConcatenationFunction(operator.id);
            }
        });
});

equal.addEventListener("click", ()=>{   //Call function that will then apply the right operation
    AssigningFunction();
});

clearing.addEventListener("click", ()=>{
    ClearingFunction();
})

del.addEventListener("click", ()=>{
    if (string_to_evaluate.length>0){ // We delete only if there is something to be deleted
        if (string_to_evaluate.at(-1)=="+" || string_to_evaluate.at(-1) || string_to_evaluate.at(-1)=="*" || string_to_evaluate.at(-1)=="/"){
            --operatorClickingNumber; //if we delete an operator, we decrease the operator count
        }

        if (string_to_evaluate.at(-1)){ //We allow to click on "point" again if we delete a point
            point.disabled=false;
        }

        string_to_evaluate = string_to_evaluate.substring(0, string_to_evaluate.length - 1);

        if (string_to_evaluate.length==0){
            div.textContent="0";
        }

        else{
            div.textContent = string_to_evaluate;
        }
            
    }
}
);

point.addEventListener("click", ()=>{
    ConcatenationFunction(".");
    
    if (string_to_evaluate.includes(".")){
        point.disabled=true;
    }
});


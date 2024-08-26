
function calculator(){
    let firstnum=document.getElementById("firstnum");
    let secondnum=document.getElementById("secondnum");
    let operator=document.getElementById("operator");
    let result=document.getElementById("result");

    if(operator.value==="+"){
        result.textContent=String(parseInt(firstnum.value)+parseInt(secondnum.value));
    }
    else if(operator.value==="-"){
            result.textContent=String(parseInt(firstnum.value)-parseInt(secondnum.value));
        }
    else if(operator.value==="*"){
            result.textContent=String(parseInt(firstnum.value)*parseInt(secondnum.value));
        }
    else if(operator.value==="/"){
            result.textContent=String(parseInt(firstnum.value)/parseInt(secondnum.value));
        }
    else{
        result.textContent="Syntax Error"
    }

}

let btn=document.getElementById("button");
let bgContainer=document.getElementById("bgContainer");

bgContainer.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        calculator();
    }
})

btn.onclick=function(){
    calculator()
}
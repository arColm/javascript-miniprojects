

function appendCurrentNum(num) {
    currentNum+= num;
    currentNumText.innerHTML = currentNum;
}

function resetCurrentNum() {
    currentNum = "";
    currentNumText.innerHTML = "0";
}

function evaluateExpression() {
    let operator = storedNum.charAt(storedNum.length-1);
    storedNum = storedNum.slice(0,storedNum.length-1);
    if(operator==="+") {
        storedNum = (parseFloat(storedNum)+parseFloat(currentNum)).toString();
        
        console.log(storedNum);
    } else if(operator==="-") {
        storedNum = (parseFloat(storedNum)-parseFloat(currentNum)).toString();

    } else if(operator==="*") {
        storedNum = (parseFloat(storedNum)*parseFloat(currentNum)).toString();

    } else if(operator==="/") {
        storedNum = (parseFloat(storedNum)/parseFloat(currentNum)).toString();

    } 
}

function changeOperator(operator) {
    storedNum = storedNum.slice(0,storedNum.length-1);
    storedNum+=operator;
}

let currentNum = "";
let storedNum = "0+";
const buttons = document.querySelectorAll("button");
const currentNumText = document.querySelector(".current-input");

buttons.forEach(button => {
    button.addEventListener("click", e=> {
        switch(button.innerHTML) {
            case "9": case "8": case "7": case "6": case "5": case "4": case "3": case "2": case "1": case "0":
                if(storedNum.charAt(storedNum.length-1)==="=") {
                    storedNum="0+";
                }
                appendCurrentNum(button.innerHTML);
                break;

            case "+":
                console.log((storedNum.charAt(storedNum.length-1)));
                if(currentNum==="") {
                    changeOperator("+");
                } else {
                    evaluateExpression();
                    storedNum+="+";
                    resetCurrentNum();
                }
                break;
            case "-":
                if(currentNum==="") {
                    changeOperator("-");
                } else {
                    evaluateExpression();
                    storedNum+="-";
                    resetCurrentNum();
                }
                
                break;
            case "*":
                
                if(currentNum==="") {
                    changeOperator("*");
                } else {
                    evaluateExpression();
                    storedNum+="*";
                    resetCurrentNum();
                }
                
                break;
            case "/":
                
                if(currentNum==="") {
                    changeOperator("/");
                } else {
                    evaluateExpression();
                    storedNum+="/";
                    resetCurrentNum();
                }

                break;
            
            

            case ".":
                if(currentNum.indexOf(".")<=0) {
                    appendCurrentNum(".");
                }
                break;
            case "=":
                evaluateExpression();
                currentNumText.innerHTML=storedNum;
                currentNum="";
                storedNum+="=";
                console.log(storedNum);
                break;
        }
    })
})
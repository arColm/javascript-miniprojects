
const canvas = document.querySelector(".canvas");


const windowSize= getComputedStyle(document.querySelector("body")).width;

const canvasSize = 64;

const cellSize = parseInt(windowSize)/canvasSize;
console.log(cellSize);

for(let i=0;i<canvasSize;i++){
    let row = document.createElement("div");
    row.setAttribute("class","row");

    row.style.display = "flex";

    canvas.appendChild(row);
    for(let j=0;j<canvasSize;j++){
        let div= document.createElement("div");
        div.setAttribute("class","cell");
        
        div.style.width=`${cellSize}px`;
        div.style.height=`${cellSize}px`;
        div.style.border ="none";
        row.appendChild(div);



    }
}

const cells = document.querySelectorAll(".canvas .row .cell");


cells.forEach(cell => {

    cell.addEventListener("mouseenter", e =>{
        if(e.buttons===1) {

            cell.style.backgroundColor="white";
        }
    })


    
})
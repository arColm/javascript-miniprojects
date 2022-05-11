
const canvas = document.querySelector(".canvas");


const windowW= getComputedStyle(document.querySelector("body")).width;

const canvasSize = 64;

let cellSize = 0;
function setCellSize() {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;


    let length = Math.min(w,h);

    cellSize= length/canvasSize;

}

setCellSize();

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

    cell.addEventListener("click", e=> {
        cell.style.backgroundColor="white";
    })


    
})

const button = document.querySelector(".top button");
button.addEventListener("click", e=> {
    cells.forEach(cell => {
        cell.style.backgroundColor="rgb(34, 34, 49)";
    })
})

//Resize the canvas if the window is resized.
window.addEventListener("resize", e=> {
    setCellSize();
    cells.forEach(cell => {
        cell.style.width=`${cellSize}px`;
        cell.style.height=`${cellSize}px`;
    })
})
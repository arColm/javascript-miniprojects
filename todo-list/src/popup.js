import {createProject, renderProjectList} from "./project.js";


const popup = document.querySelector("#popup");
const popupBackground = document.querySelector("#popup-background");

function closePopup() {
    popup.style.visibility = "hidden";
    popupBackground.style.visibility="hidden";
}

function newProjectPopup() {
    let textFieldLabel = document.createElement("label");
    textFieldLabel.setAttribute("for","newProjectName");
    textFieldLabel.innerHTML = "New Project Name";

    let textField = document.createElement("input");
    textField.setAttribute("type","text");
    textField.setAttribute("id","newProjectName");

    let newProjectButton = document.createElement("button");
    newProjectButton.setAttribute("type","button");
    newProjectButton.innerHTML = "CREATE NEW PROJECT";

    popup.replaceChildren();
    popup.appendChild(textFieldLabel);
    popup.appendChild(textField);
    popup.appendChild(newProjectButton);
    popup.style.visibility="visible";
    popupBackground.style.visibility="visible";


    newProjectButton.addEventListener("click", e=> {
        let name = textField.value;
        console.log(name);
        if(name!=="") {
            createProject(name);
            renderProjectList();
        }
        closePopup();
    })
    popupBackground.addEventListener("click", () => {
        closePopup();
    })
}

function newTaskPopup() {

}


export {newProjectPopup, newTaskPopup}
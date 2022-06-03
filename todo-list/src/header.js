import * as popup from "./popup.js";

const header = document.querySelector("#header");

/**
 * This function renders the header. It takes one parameter, the name
 * of the project. If there is no parameter, it will display a generic
 * header with only 1 button.
 * @param {*String} projectName 
 */
function renderHeader(projectName) {
    header.replaceChildren();
    let title = document.createElement("h1");
    if(typeof projectName === "undefined") {
        title.innerHTML = "WELCOME";
    } else { title.innerHTML = projectName};
    header.appendChild(title);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class","buttons");
    header.appendChild(buttonsDiv);
    let newProjectButton = document.createElement("button");
    newProjectButton.setAttribute("type","button");
    newProjectButton.innerHTML = "NEW PROJECT";
    buttonsDiv.appendChild(newProjectButton);

    newProjectButton.addEventListener("click", e => {
        popup.newProjectPopup();
    })

    if(typeof projectName !== "undefined") {
        let newTaskButton = document.createElement("button");
        newTaskButton.setAttribute("type","button");
        newTaskButton.innerHTML = "NEW TASK";
        buttonsDiv.appendChild(newTaskButton);

        newTaskButton.addEventListener("click", e=> {

        })
    }


}

export {renderHeader};
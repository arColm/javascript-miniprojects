import * as project from "./project.js";


const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar");
const header = document.querySelector("#header");
const popup = document.querySelector("#popup");
const popupBackground = document.querySelector("#popup-background");

let currentProject = "";

let a = document.createElement("h1");
a.innerHTML = "Hello World";

content.appendChild(a);

project.createProject("testProject");
renderProjectList();

renderHeader();



/**
 * This function adds a click event to all projects in the sidebar.
 * When a project is clicked, the current project is changed to that project
 */
function addProjectClickEvent() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.childNodes.forEach(child => {
        if(child.nodeName==="DIV") {
            child.addEventListener("click", () => {
                currentProject = child.firstChild.innerHTML;
                header.renderHeader(currentProject);
            })
        }
    })
}

/**
 * This function renders all projects onto the sidebar.
 */
function renderProjectList() {
    const sidebar = document.querySelector("#sidebar");
    let projects = project.getProjectList();
    sidebar.replaceChildren();
    let header = document.createElement("h1");
    header.innerHTML = "Projects";
    sidebar.appendChild(header);
    projects.forEach(project => {
        let div = document.createElement("div");
        div.setAttribute("class","project");
        sidebar.appendChild(div);

        let projectName = document.createElement("p");
        projectName.innerHTML = `${project.getName()}`;
        div.appendChild(projectName);

        let numOfTodos = document.createElement("p");
        numOfTodos.innerHTML = `${project.getTodoList().length}`;
        div.appendChild(numOfTodos);
        
        div.addEventListener("click", () => {
            console.log("aaa");
            currentProject = project.getName();
            renderHeader(currentProject);
        })
    })
};


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
        newProjectPopup();
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


    newProjectButton.addEventListener("click", ()=> {
        let name = textField.value;
        console.log(name);
        if(name!=="") {
            project.createProject(name);
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



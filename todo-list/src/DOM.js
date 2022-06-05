import * as project from "./project.js";


const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar");
const header = document.querySelector("#header");
const popup = document.querySelector("#popup");
const popupBackground = document.querySelector("#popup-background");
const todoList = document.querySelector("#todo-list");

let currentProject = "";


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
            renderTasks(currentProject);
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
            newTaskPopup();
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
    let newTaskNameLabel = document.createElement("label");
    newTaskNameLabel.setAttribute("for","newTaskName");
    newTaskNameLabel.innerHTML = "New Task Name";

    let newTaskNameField = document.createElement("input");
    newTaskNameField.setAttribute("type","text");
    newTaskNameField.setAttribute("id","newTaskName");

    let newTaskDateLabel = document.createElement("label");
    newTaskDateLabel.setAttribute("for","newTaskDate");
    newTaskDateLabel.innerHTML="Date";

    let newTaskDateField = document.createElement("input");
    newTaskDateField.setAttribute("type","date");
    newTaskDateField.setAttribute("id","newTaskDate");

    let newTaskButton = document.createElement("button");
    newTaskButton.setAttribute("type","button");
    newTaskButton.innerHTML = "CREATE NEW TASK";

    popup.replaceChildren();
    popup.appendChild(newTaskNameLabel);
    popup.appendChild(newTaskNameField);
    popup.appendChild(newTaskDateLabel);
    popup.appendChild(newTaskDateField);
    popup.appendChild(newTaskButton);
    popup.style.visibility="visible";
    popupBackground.style.visibility="visible";

    
    newTaskButton.addEventListener("click", ()=> {
        let name = newTaskNameField.value;
        let date = newTaskDateField.value;
        console.log(name);
        console.log(date);
        if(name!==""&&date!=="") {
            project.createTask(currentProject,name,date);
            renderTasks(currentProject);
            closePopup();
        }
    })
    popupBackground.addEventListener("click", () => {
        closePopup();
    })
}

/**
 * This function renders all tasks associated with a project.
 * @param {*String} projectName 
 */
function renderTasks(projectName) {
    let proj = project.getProjectWithName(projectName);
    if(proj!== undefined) {
        todoList.replaceChildren();
        proj.getTodoList().forEach(task => {
            let div = document.createElement("div");
            todoList.appendChild(div);

            let taskName = document.createElement("p");
            taskName.innerHTML = task.name;
            div.appendChild(taskName);

            let taskDate = document.createElement("p");
            taskDate.innerHTML = task.date;
            div.appendChild(taskDate);
        })
    }
}

export {
    renderProjectList,
    renderHeader,
    renderTasks
}
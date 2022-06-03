
const projects = [];

const Project = (name) => {
    const setName = (newName) => { name = newName; }
    const getName = () => {return name};

    const todoList = [];
    const getTodoList = () => {return todoList};

    const addTodo = (todo) => {
        todoList.push(todo);
    }
    return { setName, getName, addTodo, getTodoList };
}

function createProject(name) {
    let newProject = Project(name);
    projects.push(newProject);
    return newProject;
}

function renderProjectList() {
    const sidebar = document.querySelector("#sidebar");
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
    })
};

export {createProject,renderProjectList};
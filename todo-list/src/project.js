
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

function getProjectList() {
    return projects;
}

function getProjectWithName(projectName) {
    let project = projects.find(proj => {
        return proj.getName() === projectName;
    })
    return project;
}

function removeProject(projectName) {
    let project = getProjectWithName(projectName);
    if(project!==undefined) {
        projects.splice(projects.findIndex(proj => {
            return proj.getName===project.getName();
        }),1);
    }
}

class Task {
    #name;
    #date;
    constructor(name,date) {
        this.#name = name;
        this.#date = date;
    }

    get name() {
        return this.#name;
    }

    get date() {
        return this.#date;
    }
}



function createTask(projectName, taskName, taskDate) {
    let task = new Task(taskName, taskDate);
    let project = getProjectWithName(projectName);
    if(project!== undefined) {
        console.log(project);
        project.addTodo(task);
    }
}

export { 
    getProjectList, 
    createProject, 
    getProjectWithName, 
    createTask,
    removeProject
};
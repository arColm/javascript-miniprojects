
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
    if(getProjectWithName(name)!==undefined) {
        console.log("Duplicate project name");
        return -1;
    }

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
        let index = projects.findIndex(proj => {
            return proj.getName()===projectName;
        });
        projects.splice(index,1);
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
    let project = getProjectWithName(projectName);
    if(project!== undefined) {
        if(project.getTodoList().find(t => {
            return t.name ===taskName;
        })===undefined) {
            let task = new Task(taskName, taskDate);
            project.addTodo(task);
        } else {
            console.log("Duplicate task name");
        }
    } else {
        console.log("Invalid project name");
    }
}

function getTaskIndexWithName(projectName,taskName) {
    let project = getProjectWithName(projectName);
    console.log(project);
    if(project===undefined) return -1;
    let taskList = project.getTodoList();
    let taskIndex = taskList.findIndex(t => {
        return t.name === taskName;
    });
    return taskIndex;
}

function removeTask(projectName,taskName) {
    let taskIndex = getTaskIndexWithName(projectName,taskName);
    if(taskIndex===-1) return "Invalid task name";
    let project = getProjectWithName(projectName);
    if(project===undefined) return "Invalid Project name";

    project.getTodoList().splice(taskIndex,1);
    return 0;
}

export { 
    getProjectList, 
    createProject, 
    getProjectWithName, 
    createTask,
    removeProject,
    removeTask
};

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

function createTask() {

}

export { getProjectList, createProject};

import * as DOM from "./DOM.js";

//Remove this line after finishing
import * as project from "./project.js";

//Remove this section after finishing
const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar");
const header = document.querySelector("#header");
const popup = document.querySelector("#popup");
const popupBackground = document.querySelector("#popup-background");
const todoList = document.querySelector("#todo-list");
//


let currentProject = "";

DOM.renderProjectList();
DOM.renderHeader();
DOM.renderTasks("testProject");



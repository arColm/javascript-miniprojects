import * as project from "./project.js";
import * as header from "./header.js";


const content = document.querySelector("#content");

let a = document.createElement("h1");
a.innerHTML = "Hello World";

content.appendChild(a);

project.createProject("testProject");
project.renderProjectList();

header.renderHeader();
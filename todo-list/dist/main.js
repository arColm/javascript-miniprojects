(()=>{"use strict";const e=[];function t(t){let n=(e=>{const t=[];return{setName:t=>{e=t},getName:()=>e,addTodo:e=>{t.push(e)},getTodoList:()=>t}})(t);return e.push(n),n}function n(){return e}function i(t){return e.find((e=>e.getName()===t))}class d{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get name(){return this.#e}get date(){return this.#t}}document.querySelector("#content"),document.querySelector("#sidebar");const l=document.querySelector("#header"),c=document.querySelector("#popup"),o=document.querySelector("#popup-background"),r=document.querySelector("#todo-list");let a="";function u(){const e=document.querySelector("#sidebar");let t=n();e.replaceChildren();let i=document.createElement("h1");i.innerHTML="Projects",e.appendChild(i),t.forEach((t=>{let n=document.createElement("div");n.setAttribute("class","project"),e.appendChild(n);let i=document.createElement("p");i.innerHTML=`${t.getName()}`,n.appendChild(i);let d=document.createElement("p");d.innerHTML=`${t.getTodoList().length}`,n.appendChild(d),n.addEventListener("click",(()=>{console.log("aaa"),a=t.getName(),s(a)}))}))}function s(e){l.replaceChildren();let n=document.createElement("h1");n.innerHTML=void 0===e?"WELCOME":e,l.appendChild(n);let i=document.createElement("div");i.setAttribute("class","buttons"),l.appendChild(i);let d=document.createElement("button");if(d.setAttribute("type","button"),d.innerHTML="NEW PROJECT",i.appendChild(d),d.addEventListener("click",(e=>{!function(){let e=document.createElement("label");e.setAttribute("for","newProjectName"),e.innerHTML="New Project Name";let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","newProjectName");let i=document.createElement("button");i.setAttribute("type","button"),i.innerHTML="CREATE NEW PROJECT",c.replaceChildren(),c.appendChild(e),c.appendChild(n),c.appendChild(i),c.style.visibility="visible",o.style.visibility="visible",i.addEventListener("click",(()=>{let e=n.value;console.log(e),""!==e&&(t(e),u()),p()})),o.addEventListener("click",(()=>{p()}))}()})),void 0!==e){let e=document.createElement("button");e.setAttribute("type","button"),e.innerHTML="NEW TASK",i.appendChild(e),e.addEventListener("click",(e=>{}))}}function p(){c.style.visibility="hidden",o.style.visibility="hidden"}t("testProject"),u(),s(),function(e,t,n){let l=new d("testTask","testDate"),c=i("testProject");void 0!==c&&(console.log(c),c.addTodo(l))}(),function(e){let t=i("testProject");void 0!==t&&(r.replaceChildren(),t.getTodoList().forEach((e=>{let t=document.createElement("div");r.appendChild(t);let n=document.createElement("p");n.innerHTML=e.name,t.appendChild(n);let i=document.createElement("p");i.innerHTML=e.date,t.appendChild(i)})))}()})();
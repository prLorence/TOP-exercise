(()=>{"use strict";const t=function(){const t=document.querySelector(".dashboard"),e=document.createElement("div");e.setAttribute("id","modal"),e.classList.add("modal");const d=document.createElement("div");d.classList.add("field-div"),d.setAttribute("id","field-div");const n=document.getElementById("project-btn"),s=document.createElement("section");s.classList.add("task-header"),s.setAttribute("id","task-header");const a=document.createElement("form");a.setAttribute("action","./formDetails.js"),a.classList.add("modal-content");const c=document.createElement("span");c.classList.add("close-button"),c.textContent="X";const i=document.createElement("p");i.textContent="Add Project";const o=document.createElement("p"),l=document.createElement("input");l.classList.add("task-title"),l.setAttribute("type","text"),l.setAttribute("id","task-title");const r=document.createElement("p"),p=document.createElement("input");p.classList.add("task-description"),p.setAttribute("type","text"),p.setAttribute("id","task-description");const m=document.createElement("button");return m.classList.add("add-task"),m.setAttribute("id","add-task"),m.textContent="Add Task",n.addEventListener("click",(()=>{e.style.display="block"})),c.addEventListener("click",(()=>{e.style.display="none",t.removeChild(e)})),window.addEventListener("click",(()=>{event.target==e&&(e.style.display="none",t.removeChild(e))})),o.appendChild(l),r.appendChild(p),d.appendChild(o),d.appendChild(r),s.appendChild(c),s.appendChild(i),a.appendChild(s),a.appendChild(d),a.appendChild(m),e.appendChild(a),t.appendChild(n),t.appendChild(e),t};!function(){const e=document.querySelector(".container"),d=document.createElement("div");d.classList.add("dashboard");const n=document.createElement("button");n.classList.add("project-button","modal-btn"),n.setAttribute("id","project-btn"),n.textContent="Add Project",e.appendChild(d),d.appendChild(n),n.addEventListener("click",t)}()})();
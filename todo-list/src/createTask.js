import {taskList} from "./formDetails.js"

function createTask(task) {
  const taskContainer = document.getElementById("task-container")

  const taskDiv = document.createElement("div")
  taskDiv.classList.add("task-div")
	taskDiv.setAttribute("id", taskList.indexOf(task));
  
  const doneBtn = document.createElement("input")
  doneBtn.classList.add("checkbox")
  doneBtn.setAttribute("type", "checkbox")
}



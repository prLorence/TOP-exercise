import { taskList } from "./formDetails.js";

function createTask(task) {
	const taskContainer = document.getElementById("task-container");

	const taskDiv = document.createElement("div");
	taskDiv.classList.add("task-div");
	taskDiv.setAttribute("id", taskList.indexOf(task));

	const taskCheckBox = document.createElement("input");
	taskCheckBox.classList.add("task-checkbox");
	taskCheckBox.setAttribute("type", "checkbox");
	taskCheckBox.setAttribute("name", `task${taskList.indexOf(task)}`);

	const taskTitle = document.createElement("h3");
	taskTitle.classList.add("task-title");
	taskTitle.textContent = task.title;

	const taskDesc = document.createElement("p");
	taskDesc.textContent = task.description;

	taskDiv.appendChild(taskCheckBox);
	taskDiv.appendChild(taskTitle);
	taskDiv.appendChild(taskDesc);
	taskContainer.appendChild(taskDiv);

	return taskContainer;
}

export default createTask;

import { taskList } from "./formDetails.js";
import { format } from "date-fns";

function addTask(task) {
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

	const taskDate = document.createElement("p");
	taskDate.classList.add("task-date");
	taskDate.textContent = task.date;

	taskDiv.appendChild(taskCheckBox);
	taskDiv.appendChild(taskTitle);
	taskDiv.appendChild(taskDesc);
	taskDiv.appendChild(taskDate);
	taskContainer.appendChild(taskDiv);

	return taskContainer;
}

export default addTask;

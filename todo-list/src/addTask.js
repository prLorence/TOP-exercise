import { taskList } from "./taskDetails.js";
import {} from "date-fns";

function createTasks(task) {
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

	const addTaskBtn = document.createElement("button");
	addTaskBtn.classList.add("add-task");
	addTaskBtn.setAttribute("id", "add-task");
	addTaskBtn.textContent = "Add Task";

	// const taskDate = document.createElement("p");
	// taskDate.classList.add("task-date");
	// taskDate.textContent = task.date;

	taskDiv.appendChild(taskCheckBox);
	taskDiv.appendChild(taskTitle);
	taskDiv.appendChild(taskDesc);
	taskDiv.appendChild(addTaskBtn);
	// taskDiv.appendChild(taskDate);
	taskContainer.appendChild(taskDiv);

	return taskContainer;
}

export default createTasks;

import { projectList } from "./projectDetails.js";
import { format } from "date-fns";

function addProject(project) {
	const dashBoard = document.querySelector(".dashboard");

	const projectDiv = document.createElement("div");
	projectDiv.classList.add("project-card");
	projectDiv.setAttribute("id", projectList.indexOf(project));

	// const taskCheckBox = document.createElement("input");
	// taskCheckBox.classList.add("task-checkbox");
	// taskCheckBox.setAttribute("type", "checkbox");
	// taskCheckBox.setAttribute("name", `task${taskList.indexOf(task)}`);

	const projectTitle = document.createElement("h3");
	projectTitle.classList.add("task-title");
	projectTitle.textContent = project.title;

	const projectDesc = document.createElement("p");
	projectDesc.textContent = project.description;

	// const taskDate = document.createElement("p");
	// taskDate.classList.add("task-date");
	// taskDate.textContent = task.date;

	// taskDiv.appendChild(taskCheckBox);
	projectDiv.appendChild(projectTitle);
	// projectDiv.appendChild(projectDesc);
	// taskDiv.appendChild(taskDate);
	dashBoard.appendChild(projectDiv);

	return dashBoard;
}

export default addProject;

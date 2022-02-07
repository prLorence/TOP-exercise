import createTasks from "./createTask";
import { projectList } from "./projectDetails";

function addProject(project) {
	const dashBoard = document.querySelector(".dashboard");

	const projectDiv = document.createElement("div");
	projectDiv.classList.add("project-card");
	projectDiv.setAttribute("id", `project${projectList.indexOf(project)}`);

	const projectTitle = document.createElement("h3");
	projectTitle.classList.add("project-title");
	projectTitle.textContent = project.title;

	const projectDesc = document.createElement("p");
	projectDesc.textContent = project.description;

	const projectCards = document.querySelectorAll("#dashboard > div");

	projectCards.forEach((project) => {
		project.addEventListener("click", createTasks);
	});

	projectDiv.appendChild(projectTitle);
	dashBoard.appendChild(projectDiv);

	return dashBoard;
}

export default addProject;

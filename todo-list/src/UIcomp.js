import createProject from "./createProject";
import createTasks from "./addTask";

function createDashBoard() {
	const container = document.querySelector(".container");

	const dashBoard = document.createElement("div");
	dashBoard.classList.add("dashboard");
	dashBoard.setAttribute("id", "dashboard");

	const addProjectBtn = document.createElement("button");
	addProjectBtn.classList.add("project-button", "modal-btn");
	addProjectBtn.setAttribute("id", "project-btn");
	addProjectBtn.textContent = "Add Project";

	container.appendChild(dashBoard);
	container.appendChild(createHeader("clipboard", "Bit List"));
	dashBoard.appendChild(addProjectBtn);

	addProjectBtn.addEventListener("click", createProject);

	return container;
}

function createHeader(image, text) {
	const toDoListHeader = document.createElement("header");
	toDoListHeader.classList.add("header");
	toDoListHeader.setAttribute("id", "header");

	const toDoTitle = document.createElement("h2");
	toDoTitle.classList.add("title");
	toDoTitle.textContent = text;

	const iconImg = document.createElement("img");
	iconImg.src = `./images/${image.toLowerCase()}.svg`;
	iconImg.classList.add("icon");

	toDoListHeader.appendChild(iconImg);
	toDoListHeader.appendChild(toDoTitle);

	return toDoListHeader;
}

export default createDashBoard;

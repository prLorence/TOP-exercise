import createProject from "./createProject";

function createDashBoard() {
	const container = document.querySelector(".container");

	const dashBoard = document.createElement("div");
	dashBoard.classList.add("dashboard");

	const addProjectBtn = document.createElement("button");
	addProjectBtn.classList.add("project-button", "modal-btn");
	addProjectBtn.setAttribute("id", "project-btn");
	addProjectBtn.textContent = "Add Project";

	container.appendChild(dashBoard);
	dashBoard.appendChild(addProjectBtn);

	addProjectBtn.addEventListener("click", createProject);

	return container;
}

export default createDashBoard;

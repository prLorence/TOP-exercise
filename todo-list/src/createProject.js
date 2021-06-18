import addProjectCard from "./projectDetails";

function createProject() {
	const dashboard = document.querySelector(".dashboard");

	const formModal = document.createElement("div");
	formModal.setAttribute("id", "modal");
	formModal.classList.add("modal");

	const fieldDiv = document.createElement("div");
	fieldDiv.classList.add("field-div");
	fieldDiv.setAttribute("id", "field-div");

	const addProjectBtn = document.getElementById("project-btn");

	const taskHeaderSection = document.createElement("section");
	taskHeaderSection.classList.add("task-header");
	taskHeaderSection.setAttribute("id", "task-header");

	const formContent = document.createElement("form");
	formContent.setAttribute("action", "./formDetails.js");
	formContent.setAttribute("id", "form");
	formContent.classList.add("modal-content");

	const closeBtn = document.createElement("span");
	closeBtn.classList.add("close-button");
	closeBtn.textContent = "X";

	// task title input field
	const taskTitlePara = document.createElement("p");
	const taskTitleField = document.createElement("input");
	taskTitleField.classList.add("task-title");
	taskTitleField.setAttribute("type", "text");
	taskTitleField.setAttribute("name", "title");
	taskTitleField.setAttribute("placeholder", "Project Title");
	taskTitleField.setAttribute("id", "task");

	// task description input field
	const taskDescPara = document.createElement("p");
	const taskDescField = document.createElement("input");
	taskDescField.classList.add("task-description");
	taskDescField.setAttribute("type", "text");
	taskDescField.setAttribute("name", "description");
	taskDescField.setAttribute("placeholder", "Project Description");
	taskDescField.setAttribute("id", "task");

	// task date input field
	// const taskDateField = document.createElement("input");
	// taskDateField.classList.add("task-date");
	// taskDateField.setAttribute("type", "date");
	// taskDateField.setAttribute("name", "date");
	// taskDateField.setAttribute("id", "task");

	const addTaskBtn = document.createElement("button");
	addTaskBtn.classList.add("add-task");
	addTaskBtn.setAttribute("id", "add-task");
	addTaskBtn.textContent = "Add Project";

	// Click event listeners

	addTaskBtn.addEventListener("click", addProjectCard);

	addProjectBtn.addEventListener("click", () => {
		formModal.style.display = "block";
	});

	addTaskBtn.addEventListener("click", () => {
		formModal.style.display = "none";
		dashboard.removeChild(formModal);
	});

	closeBtn.addEventListener("click", () => {
		formModal.style.display = "none";
		dashboard.removeChild(formModal);
	});

	window.addEventListener("click", () => {
		if (event.target == formModal) {
			formModal.style.display = "none";
			dashboard.removeChild(formModal);
		}
	});

	taskTitlePara.appendChild(taskTitleField);
	taskDescPara.appendChild(taskDescField);
	fieldDiv.appendChild(taskTitlePara);
	fieldDiv.appendChild(taskDescPara);
	// fieldDiv.appendChild(taskDateField);
	taskHeaderSection.appendChild(closeBtn);
	formContent.appendChild(taskHeaderSection);
	formContent.appendChild(fieldDiv);
	formContent.appendChild(addTaskBtn);
	formModal.appendChild(formContent);
	dashboard.appendChild(addProjectBtn);
	dashboard.appendChild(formModal);

	return dashboard;
}

export default createProject;

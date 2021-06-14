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
	formContent.classList.add("modal-content");

	const closeBtn = document.createElement("span");
	closeBtn.classList.add("close-button");
	closeBtn.textContent = "X";

	const taskTitle = document.createElement("p");
	taskTitle.textContent = "Add Project";

	const taskTitlePara = document.createElement("p");
	const taskTitleField = document.createElement("input");
	taskTitleField.classList.add("task-title");
	taskTitleField.setAttribute("type", "text");
	taskTitleField.setAttribute("id", "task-title");

	const taskDescPara = document.createElement("p");
	const taskDescField = document.createElement("input");
	taskDescField.classList.add("task-description");
	taskDescField.setAttribute("type", "text");
	taskDescField.setAttribute("id", "task-description");

	const addTaskBtn = document.createElement("button");
	addTaskBtn.classList.add("add-task");
	addTaskBtn.setAttribute("id", "add-task");
	addTaskBtn.textContent = "Add Task";

	// When the user clicks on the button, open the modal
	addProjectBtn.addEventListener("click", () => {
		formModal.style.display = "block";
	});

	// When the user clicks on <span> (x), close the modal
	closeBtn.addEventListener("click", () => {
		formModal.style.display = "none";
		dashboard.removeChild(formModal);
	});

	// When the user clicks anywhere outside of the modal, close it
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
	taskHeaderSection.appendChild(closeBtn);
	taskHeaderSection.appendChild(taskTitle);
	formContent.appendChild(taskHeaderSection);
	formContent.appendChild(fieldDiv);
	formContent.appendChild(addTaskBtn);
	formModal.appendChild(formContent);
	dashboard.appendChild(addProjectBtn);
	dashboard.appendChild(formModal);

	return dashboard;
}

export default createProject;

function createProject() {
	const dashboard = document.querySelector(".dashboard");

	const formModal = document.createElement("div");
	formModal.setAttribute("id", "modal");
	formModal.classList.add("modal");

	const addProjectBtn = document.getElementById("project-btn");

	const formContent = document.createElement("div");
	formContent.classList.add("modal-content");

	const closeBtn = document.createElement("span");
	closeBtn.classList.add("close-button");
	closeBtn.textContent = "X";

	const taskTitle = document.createElement("p");
	taskTitle.textContent = "this is some text";

	// When the user clicks on the button, open the modal
	addProjectBtn.onclick = function () {
		modal.style.display = "block";
	};

	// When the user clicks on <span> (x), close the modal
	closeBtn.onclick = function () {
		modal.style.display = "none";
		dashboard.removeChild(formModal);
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
			dashboard.removeChild(formModal);
		}
	};

	formContent.appendChild(closeBtn);
	formContent.appendChild(taskTitle);
	formModal.appendChild(formContent);
	dashboard.appendChild(addProjectBtn);
	dashboard.appendChild(formModal);

	return dashboard;
}
export default createProject;

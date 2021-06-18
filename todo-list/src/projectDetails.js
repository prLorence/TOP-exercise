import render from "./displayTask";

export let projectList = [];

function addProjectCard() {
	let newProject;
	class Project {
		constructor(title, description) {
			this.title = form.title.value;
			this.description = form.description.value;
		}
	}

	function addTask(title, description) {
		event.preventDefault();

		newProject = new Project(title, description);
		projectList.push(newProject);
		render();
		form.reset();
	}

	return addTask();
}

export default addProjectCard;

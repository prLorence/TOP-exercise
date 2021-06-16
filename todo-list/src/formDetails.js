import render from "./displayTask";

export let taskList = [];

function addProjectDetails() {
	let newTask;
	class Task {
		constructor(title, description) {
			(this.title = form.title.value),
				(this.description = form.description.value);
		}
	}

	function addTask(title, description) {
		event.preventDefault();

		newTask = new Task(title, description);
		taskList.push(newTask);
		render();
		form.reset();
	}

	return addTask();
}

export default addProjectDetails;

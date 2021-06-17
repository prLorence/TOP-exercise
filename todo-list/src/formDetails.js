import render from "./displayTask";

export let taskList = [];

function addProjectDetails() {
	let newTask;
	class Task {
		constructor(title, description, date = "No date") {
			(this.title = form.title.value),
				(this.description = form.description.value),
				(this.date = form.date.value);
		}
	}

	function addTask(title, description, date) {
		event.preventDefault();

		newTask = new Task(title, description, date);
		taskList.push(newTask);
		render();
		form.reset();
	}

	return addTask();
}

export default addProjectDetails;

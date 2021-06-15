import {taskList} from "./formDetails";

function render() {
	const taskContainer = document.querySelector(".task-container");
	const tasks = document.querySelectorAll("#task");

	tasks.forEach((task) => taskContainer.removeChild(task));

	for (let i = 0; i < taskList.length; i++) {
		createTask(taskList[i]);
	}
}

export default render;

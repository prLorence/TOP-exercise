import { taskList } from "./formDetails";
import addTask from "./addTask";

function render() {
	const taskContainer = document.getElementById("task-container");
	const tasks = document.querySelectorAll(".task-div");

	tasks.forEach((task) => taskContainer.removeChild(task));

	for (let i = 0; i < taskList.length; i++) {
		addTask(taskList[i]);
	}
}

export default render;

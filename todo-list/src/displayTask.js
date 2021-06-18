import { projectList } from "./projectDetails";
import addProject from "./addProject";

function render() {
	const dashBoard = document.querySelector(".dashboard");
	const projects = document.querySelectorAll(".project-card");

	projects.forEach((project) => dashBoard.removeChild(project));

	for (let i = 0; i < projectList.length; i++) {
		addProject(projectList[i]);
	}
}

export default render;

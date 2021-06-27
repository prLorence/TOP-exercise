export const container = document.createElement("div");

export default function createWebsite() {
	container.classList.add("container");
	const header = document.createElement("header");
	header.classList.add("title-header");

	const title = document.createElement("h2");
	title.classList.add("hero-title");
	title.textContent = "Bitcoin Price Tracker";

	header.appendChild(title);
	document.body.appendChild(header);
	document.body.appendChild(container);
}


function createFormField() {
	// class Book {
	// 	constructor(title, description) {
	// 		(this.title = form.title.value),
	// 			(this.description = form.description.value);
	// 	}
	// }

	// let tasks = [];
	// let newTask;

	// function addBookToLibrary() {
	// 	event.preventDefault();
	// 	prompt.style.display = "none";

	// 	newBook = new Book(title, author, pages, read);
	// 	myShelf.push(newBook);
	// 	render();
	// 	form.reset();
	// }

	const fieldDiv = document.createElement("div");
	fieldDiv.className.add("field-div");
	fieldDiv.setAttribute("id", "field-div");

	const taskTitleField = document.createElement("input");
	taskTitleField.classList.add("task-title");
	taskTitleField.setAttribute("type", "text");
	taskTitleField.setAttribute("id", "task-title");

	const taskDescField = document.createElement("input");
	taskDescField.classList.add("task-description");
	taskDescTitle.setAttribute("type", "text");
	taskDescTitle.setAttribute("id", "task-description");

	fieldDiv.appendChild(taskTitleField);
	fieldDiv.appendChild(taskDescField);
	formContent.appendChild(fieldDiv);

	return formContent;
}

export default createFormField;

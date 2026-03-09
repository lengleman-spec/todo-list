// DOM manipulation logic (rendering, event listeners)
// import the app module:
import { App } from "./app.js";
const todoForm = document.getElementById("add-todo-form");
todoForm.addEventListener("submit", (event) => {
  //stop the page from reloading with:
  event.preventDefault();

  // Use .value to get the user's input
  const title = document.getElementById("todo-title").value;
  const description = document.getElementById("todo-desc").value;
  const dueDate = document.getElementById("todo-due").value;
  const priority = document.getElementById("todo-priority").value;

  // Call the app function to create the todo:
  App.addTodoToProject(0, title, description, dueDate, priority);

  // Update the UI:
  renderTodos(0);

  // Reset the form so it's empty for the next todo:
  todoForm.reset();
});

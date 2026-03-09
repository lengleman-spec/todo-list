// DOM manipulation logic (rendering, event listeners)
// import the app module:
import { App } from "./app.js";
const todoForm = document.getElementById("add-todo-form");
const todoListDiv = document.getElementById("todo-list");

function renderTodos(projectIndex) {
  // Remove old todos so they don't duplicate every time it's rendered
  todoListDiv.innerHTML = "";
  const project = App.getProjects()[projectIndex];

  // Loop through all todos in the project:
  project.todos.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.textContent = `${todo.title} - ${todo.dueDate} - ${todo.priority}`;
    if (todo.completed) {
      todoDiv.classList.add("completed");
    }

    // Toggle completion on click
    todoDiv.addEventListener("click", () => {
      todo.toggleCompleted();
      renderTodos(projectIndex);
    });

    todoListDiv.appendChild(todoDiv);
  });
}

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

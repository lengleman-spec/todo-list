import { App } from "./app.js";

const todoForm = document.getElementById("add-todo-form");
const todoListDiv = document.getElementById("todo-list");

function renderTodos(projectIndex = 0) {
  todoListDiv.innerHTML = "";
  const project = App.getProjects()[projectIndex];

  project.todos.forEach((todo, index) => {
    const container = document.createElement("div");
    container.classList.add("todo-container");

    const todoDiv = document.createElement("div");
    todoDiv.textContent = `${todo.title} - ${todo.dueDate} - ${todo.priority}`;
    if (todo.completed) todoDiv.classList.add("completed");

    todoDiv.addEventListener("click", () => {
      todo.toggleCompleted();
      renderTodos(projectIndex);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevents toggling completion
      App.removeTodoFromProject(projectIndex, index);
      renderTodos(projectIndex);
    });

    container.appendChild(todoDiv);
    container.appendChild(deleteBtn);
    todoListDiv.appendChild(container);
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("todo-title").value;
  const description = document.getElementById("todo-desc").value;
  const dueDate = document.getElementById("todo-due").value;
  const priority = document.getElementById("todo-priority").value;

  App.addTodoToProject(0, title, description, dueDate, priority);
  renderTodos(0);

  todoForm.reset();
});

// Initial render
renderTodos();

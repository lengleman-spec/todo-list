import { App } from "./app.js";
import { Project } from "./project.js";

const todoForm = document.getElementById("add-todo-form");
const todoListDiv = document.getElementById("todo-list");
const projectNameH2 = document.getElementById("project-name");

const projectForm = document.getElementById("add-project-form");
const projectNameInput = document.getElementById("project-name-input");
const deleteProjectBtn = document.getElementById("delete-project-btn");

// Track the current project index
let currentProjectIndex = 0;

// Render todos and project name
function renderTodos(projectIndex = 0) {
  const project = App.getProjects()[projectIndex];
  currentProjectIndex = projectIndex;

  // Update project name display
  projectNameH2.textContent = project.name;

  // Clear todos
  todoListDiv.innerHTML = "";

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
      e.stopPropagation();
      App.removeTodoFromProject(projectIndex, index);
      renderTodos(projectIndex);
    });

    container.appendChild(todoDiv);
    container.appendChild(deleteBtn);
    todoListDiv.appendChild(container);
  });
}

// Add new todo
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("todo-title").value;
  const description = document.getElementById("todo-desc").value;
  const dueDate = document.getElementById("todo-due").value;
  const priority = document.getElementById("todo-priority").value;

  App.addTodoToProject(
    currentProjectIndex,
    title,
    description,
    dueDate,
    priority,
  );
  renderTodos(currentProjectIndex);

  todoForm.reset();
});

// Add new project
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = projectNameInput.value;
  App.getProjects().push(new Project(projectName));
  projectNameInput.value = "";
  renderTodos(App.getProjects().length - 1); // Switch to new project
});

// Delete Project (not todos)
deleteProjectBtn.addEventListener("click", () => {
  const projects = App.getProjects();

  if (projects.length <= 1) {
    alert("You must have at least one project.");
    return;
  }

  projects.splice(currentProjectIndex, 1);

  currentProjectIndex = 0;
  renderTodos(currentProjectIndex);
});

// Initial render
renderTodos();

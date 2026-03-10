import { Project } from "./project.js";
import { Todo } from "./todo.js";

export const App = (() => {
  const projects = [new Project("Default")];

  function addTodoToProject(
    projectIndex,
    title,
    description,
    dueDate,
    priority,
  ) {
    const todo = new Todo(title, description, dueDate, priority);
    projects[projectIndex].addTodo(todo);
  }

  function removeTodoFromProject(projectIndex, todoIndex) {
    projects[projectIndex].removeTodo(todoIndex);
  }

  function getProjects() {
    return projects;
  }

  return { addTodoToProject, removeTodoFromProject, getProjects };
})();

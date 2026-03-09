// Main app logic (managing multiple projects)
import { Project } from "./project.js";
import { Todo } from "./todo.js";

// use IIFE so that the data is private
export const App = (() => {
  // store all projects
  let projects = [];

  const defaultProject = new Project("Default");
  projects.push(defaultProject);

  // add projects
  function addProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
  }

  // function to get all projects for the DOM
  function getProjects() {
    return projects;
  }

  // creates a new todo
  function addTodoToProject(
    projectIndex,
    title,
    description,
    dueDate,
    priority,
  ) {
    // find the correct project and adds the todo to the project
    const newTodo = new Todo(title, description, dueDate, priority);
    projects[projectIndex].addTodo(newTodo);
  }

  // return the public functions we want accessible
  return { addProject, getProjects, addTodoToProject };
})();

window.App = App;

// Main app logic (managing multiple projects)
import { Project } from "./project.js";

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

  // return the public functions we want accessible
  return { addProject, getProjects };
})();

window.App = App;

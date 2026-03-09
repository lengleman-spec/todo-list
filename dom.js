// DOM manipulation logic (rendering, event listeners)
// import the app module:
import { App } from "./app.js";
const todoForm = document.getElementById("add-todo-form");
todoForm.addEventListener("submit", (event) => {
  //stop the page from reloading with:
  event.preventDefault();
});

// Project class (list of todos) goes here
export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  // adds item to the end of the list
  addTodo(todo) {
    this.todos.push(todo);
  }

  // removes item at index X
  deleteTodo(index) {
    this.todos.splice(index);
  }

  // returns the projects todos to be used later
  getTodos() {
    return this.todos;
  }
}

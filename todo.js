// Todo class goes here

export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.notes = [];
    this.checklist = [];
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  addNote(note) {
    this.notes.push(note);
  }

  addChecklistItem(item) {
    this.checklist.push(item);
  }

  toggleChecklistItem(index) {
    this.checklist[index].done = !this.checklist[index].done;
  }
}

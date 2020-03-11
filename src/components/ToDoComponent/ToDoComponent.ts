import {Todo} from '../../interfaces/Todo';

export class ToDoComponent {
  heading = "Todos";
  todos: Todo[] = [];
  todoDescription = '';

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}



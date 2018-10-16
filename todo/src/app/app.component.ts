import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todo = "";
  completed = false;
  todos = [];

  addTodo(){
    this.todos.push(this.todo);
  }

  removeTodo(position) {
    return this.todos.splice(position, 1);
  }
}

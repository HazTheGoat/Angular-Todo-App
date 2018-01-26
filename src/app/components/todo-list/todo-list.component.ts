import { Todo } from './../../../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  undoneTodosCount: number = 0;
  doneCount: number = 0;

  constructor(private _todoService: TodoService) { }

  // Angular lifecycle hook
  ngOnInit(){
    this.getTotalTodosStatusCount();
  }

  // Fetching the todos from the DB and calculating how many is undone
  getTotalTodosStatusCount(){
    this._todoService.getTodos().forEach(x => !x.completed ? this.undoneTodosCount++ : this.doneCount++)
  }

  // Listen to status event from child component and do something
  handleStatusChanged(status){
    
    if(status) {
      this.undoneTodosCount--;
      this.doneCount++;
    } else {
      this.undoneTodosCount++;
      this.doneCount--;
    }
  }
  
  // Adds a new todo
  addTodo(input){
    if(input.value == "")
      return;

    this._todoService.addTodo(input.value);
    input.value = "";
    this.undoneTodosCount++;
  }

  // Delete a todo (We call on this from a child component)
  deleteTodo(index){
    this._todoService.deleteTodo(index);
    this.doneCount--;
  }

}

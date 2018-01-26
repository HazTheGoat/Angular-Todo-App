import { Todo } from './../../../models/todo.model';
import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnChanges {
  @Input() todo: Todo; // this variable gets populated by the mother element
  @Output() statusChangedEvent = new EventEmitter();// We create our own event
  @Output() deleteTodoEvent = new EventEmitter();// We create our own event
  checked: boolean;
  editMode = false;

  // Angular lifecycle hook: When data comes in from the mother component
  ngOnChanges(e: SimpleChanges){
    this.checked = e.todo.currentValue.completed;
  }

  // A click event from the view
  onStatusChange(){
    this.todo.completed = this.checked;
    this.statusChangedEvent.emit(this.checked);
  }

  // A function for when the Input event triggers in the view 
  onTitleEdit(value){
    this.todo.title = value;
  }

  deleteTodo(){
    this.deleteTodoEvent.emit();
  }
}

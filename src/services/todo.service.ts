import { Todo } from './../models/todo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    db: Array<Todo> = [
        {
            title: 'Buy mom birthday gift',
            completed: false
        },
        {
            title: 'Call Henry',
            completed: true
        },
        {
            title: 'Buy groceries',
            completed: true
        },
        {
            title: 'Change to winter tires',
            completed: false
        },
        {
            title: 'Pay the bills',
            completed: false
        }
    ]

    // Returns a db
    getTodos() {
        return this.db;
    }

    // Adds a todo to the db
    addTodo(todo){
        this.db.push({
            title: todo,
            completed: false
        })
    }

    // Deletes a todo from the db. Uses lodash to compare objects
    deleteTodo(i){
        this.db.splice(i, 1);
    }
}

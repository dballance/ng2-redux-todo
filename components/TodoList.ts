import { Component, View, Input, Output, EventEmitter, ChangeDetectionStrategy } from 'angular2/core';
import { ITodo, Todo } from './Todo';

@Component({
  selector: 'todo-list',
  directives: [ Todo ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <todo 
        *ngFor="#todo of todos"
        [text]="todo.text"
        [completed]="todo.completed"
        (click)="onClick(todo.id)"
    ></todo>
  `
})
export class TodoList {
    @Input() todos: ITodo[];
    @Output() onTodoClick: EventEmitter<number> = new EventEmitter<number>();
    
    onClick(id: number){
        this.onTodoClick.emit(id);
    }
}
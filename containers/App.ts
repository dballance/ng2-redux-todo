import {Component, Inject} from 'angular2/core';
import { bindActionCreators } from 'redux';
import { TodoList } from '../components/TodoList';
import { FilterLink } from './FilterLink';
import * as TodoActions from '../actions/TodosActions';

@Component({
  selector: 'root',
  directives: [ TodoList, FilterLink ],
  template: `
    <input 
        type="text" 
        #newtodo 
    >
    <button (click)="addTodo(newtodo.value); newtodo.value=''">Add</button>
    <todo-list 
        [todos]="todos"
        (onTodoClick)="toggleTodo($event)"
    ></todo-list>
    <div> Show: 
        <filter-link filter="SHOW_ALL" text="All"></filter-link>
        <filter-link filter="SHOW_ACTIVE" text="Active"></filter-link>
        <filter-link filter="SHOW_COMPLETED" text="Completed"></filter-link>
    </div>
  `,

})

export default class App {

  protected unsubscribe: Function;

  constructor( @Inject('ngRedux') ngRedux, @Inject('devTools') devTools) {
    devTools.start(ngRedux);
    this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
    console.log("state constructor", this["state"])
  }
  
  getVisibleTodos(todos: any[], filter: string) {
      switch(filter) {
          case "SHOW_ALL": {
              return todos;
          }
          case "SHOW_COMPLETED": {
              return todos.filter( t => t.completed );
          }
          case "SHOW_ACTIVE": {
              return todos.filter(t => !t.completed );
          }
      }
  }

  onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      todos: state.todos,
      visibilityFilter: state.visibilityFilter
    };
  }

  mapDispatchToThis(dispatch) {
     return bindActionCreators(TodoActions, dispatch);
  }
}

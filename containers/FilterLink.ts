import { Component, View, Input, Inject } from 'angular2/core';
import { bindActionCreators } from 'redux';
import * as FilterActions from '../actions/FilterActions';
import { Link } from '../components/Link';


@Component({
    selector: 'filter-link',
})
@View({
    directives: [ Link ],
    template: `
        <db-link 
            [active]="filter === visibilityFilter" 
            [text]="text"
            (click)="onClick($event)"
        >
            <ng-content></ng-content>
        </db-link>
    `
})
export class FilterLink {
  @Input() filter: string; 
  @Input() text: string;
  visibilityFilter: string;
  setVisibilityFilter: (filter: string) => {};
    
  protected unsubscribe: Function;

  constructor( @Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(this.mapState, this.mapDispatch)(this);
    console.log("filterLink", this);
  }
  
  onClick(e) {
     e.preventDefault();
     if (this.filter !== this.visibilityFilter) {
         this.setVisibilityFilter(this.filter);
     }
  }

  onDestroy() {
    this.unsubscribe();
  }

  mapState(state) {
    return {
      visibilityFilter: state.visibilityFilter
    };
  }

  mapDispatch(dispatch) {
     return bindActionCreators(FilterActions, dispatch);
  }
}
import { Component, View, Input, Inject, OnInit, OnDestroy } from 'angular2/core';
import { bindActionCreators } from 'redux';
import * as FilterActions from '../actions/FilterActions';
import { Link } from '../components/Link';


@Component({
    selector: 'filter-link',
})
@View({
    directives: [ Link ],
    template: `
        <active-link 
            [active]="filter === visibilityFilter" 
            [text]="text"
            (click)="onClick($event)"
        >
            <ng-content></ng-content>
        </active-link>
    `
})
export class FilterLink implements OnInit, OnDestroy {
  @Input() filter: string; 
  @Input() text: string;
  visibilityFilter: string;
  setVisibilityFilter: (filter: string) => {};
    
  protected unsubscribe: Function;

  constructor(@Inject('ngRedux') private ngRedux) {

  }
  
  onClick(e) {
     e.preventDefault();
     if (this.filter !== this.visibilityFilter) {
         this.setVisibilityFilter(this.filter);
     }
  }
  
  ngOnInit() {
    this.unsubscribe = this.ngRedux.connect(this.mapState, this.mapDispatch)(this);
  }

  ngOnDestroy() {
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
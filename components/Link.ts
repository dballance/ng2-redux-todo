import { Component, View, Input, Output, ChangeDetectionStrategy  } from 'angular2/core';

@Component({
    selector: 'active-link',

})
@View({
    template: `
           <span *ngIf="active">{{text}}</span>
           <a *ngIf="!active" href="#">{{text}}</a>
    `
})
export class Link {
    @Input() active: boolean;
    @Input() text: string;
    
}
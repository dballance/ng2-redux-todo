import { Component, View, Input, Output, ChangeDetectionStrategy } from 'angular2/core';

export interface ITodo {
    text: string;
    completed: boolean;
    id: number;
}

@Component({
    selector: 'todo',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@View({
    template: `
        <li
            [style.textDecoration]="completed ? 'line-through' : 'none'"
        >
        {{text}}
        </li>
    `
})
export class Todo implements ITodo  {
    @Input() text: string;
    @Input() completed: boolean;
    id: number;
}
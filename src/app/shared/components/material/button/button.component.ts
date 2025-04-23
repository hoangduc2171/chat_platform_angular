import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'mat-button',
    template: `
        <button #button
            [type]="type"
            [class.outline]="isOutline"
            (click)="onClick($event)"
        >{{ label }}</button>
    `,
    styleUrls: [
        './button.component.scss'
    ]
})

export class MatButtonComp {
    @Input() label: string = 'Click';
    @Input() type! : 'button' | 'submit' | 'reset';
    @Input() isOutline: boolean = false;
    @Output() clickEmitter = new EventEmitter();
    
    onClick(event: any) {
        this.clickEmitter.emit(event);
    }
}
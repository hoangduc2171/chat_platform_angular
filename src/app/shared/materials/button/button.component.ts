import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'mat-button',
    template: `
        <button #button
            [type]="type"
            [class.outline]="isOutline"
            [class.onlyText]="onlyText"
            [class.full-size]="isFullSize"
            (click)="onClick($event)"
            [disabled]="disable"
        ><i [style.display]="!icon && 'none'" [className]="icon"></i>{{ label }}</button>
    `,
    styleUrls: [
        './button.component.scss'
    ]
})

export class MatButtonComp {
    @Input() label: string = 'Click';
    @Input() type! : 'button' | 'submit' | 'reset';
    @Input() isOutline: boolean = false;
    @Input() onlyText: boolean = false;
    @Input() isFullSize: boolean = false;
    @Input() icon: string = ''; 
    @Input() disable: boolean = false;
    @Output() clickEmitter = new EventEmitter();
    
    onClick(event: any) {
        this.clickEmitter.emit(event);
    }
}
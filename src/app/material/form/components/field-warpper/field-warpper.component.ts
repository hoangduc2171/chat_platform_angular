import { Component, Input } from "@angular/core";

@Component({
    selector: 'mat-input-warpper', 
    template: `
        <div class="input-field" *ngIf="type !== 'checkbox'; else checkbox">
            <input [id]="id" [name]="name" [placeholder]="placeholder" [type]="type">
            <label for="id">{{ label }}</label>
            <p class="input-subtext"></p>
        </div>
        <ng-template #checkbox>
            <div class="checkbox-field">
                <input [id]="id" [name]="name" [type]="type">
                <label>{{ label }}</label>
            </div>
        </ng-template>
        
    `,
    styleUrls: ['./field-warpper.component.scss']
})

export class MatInputWarpperComp {
    @Input() id! : string;
    @Input() name! : string;
    @Input() type : string = 'text';
    @Input() label : string = 'Label';
    @Input() placeholder! : string;
}
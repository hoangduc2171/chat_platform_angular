import { Component, Input } from "@angular/core";
import { ToastService } from "./toast.service";

@Component({
    selector: 'mat-toast', 
    template: `
        <div *ngIf="toastService.toastMessage$ | async as toast" class="error-notify" [class]="toast.type" [ngSwitch]="toast.type">
            <button class="error-close">
                <i *ngSwitchCase="'success'" class="fa-solid fa-check"></i>
                <i *ngSwitchCase="'error'" class="fa-solid fa-xmark"></i>
                <i *ngSwitchCase="'warning'" class="fa-solid fa-warning"></i>
            </button>
            <p class="error-title">{{ toast.message }}</p>
        </div>
    `,
    styleUrls: ['./toast.component.scss']
})

export class MatToastComp {
    constructor(public toastService : ToastService) { }
}
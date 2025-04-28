import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'dropdown', 
    template: `
        <ul class="dropdown-container" [class.show]="isShowDropdown" (click)="stopToggle($event)">
            <ng-content>
                
            </ng-content>
        </ul>
    `, 
    styles: [`
        .dropdown-container {
            position: absolute;
            display: none;
            top: 100%;
            right: 0;
            min-width: 220px;
            background-color: #fff;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            animation: ease FadeIn 0.2s; 
            list-style: none;
            padding: 16px 0 20px 0;
            z-index: 999;

            &.show {
                display: block;
            }
        }

        @keyframes FadeIn {
            from {
                opacity: 0;
            } to {
                opacity: 1;
            }
        }
    `]
})

export class MatDropdownComp {
    @Input() isShowDropdown = false;

    stopToggle(event: Event) : void {
        event.stopPropagation();
    }

    toggleDropdown() : void {
        this.isShowDropdown = !this.isShowDropdown;
    }
}
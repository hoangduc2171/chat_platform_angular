import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'user-form', 
    templateUrl: './user-form.component.html', 
    styleUrls: [
        './user-form.component.scss'
    ]
})

export class MatUserFormComp {
    @Input() formName! : FormGroup;
    isRequired : boolean = true;
}
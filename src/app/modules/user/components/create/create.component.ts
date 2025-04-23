
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'user-create',
    templateUrl: './create.component.html'
})
export class FeUserCreateComp {
    form!: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }

    onSubmit() {
        if (this.form.valid) {
            console.log('Form submitted:', this.form.value);
        }
    }
}



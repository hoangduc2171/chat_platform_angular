
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'user-create',
    templateUrl: './create.component.html'
})
export class FeUserCreateComp {
    form!: FormGroup;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.form = new FormGroup({
            first_name: new FormControl('', [Validators.required]),
            last_name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            avatar: new FormControl('')
        });
    }

    onSubmit() {
        this.userService.createUser(this.form.value).subscribe({
            next: (response) => {
                console.log("Result: " + response);
            }
        })
    }
}




import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'user-create',
    template: `<user-form [formName]="createForm"></user-form>`
})
export class FeUserCreateComp {
    createForm!: FormGroup;

    constructor(
        private userService: UserService,
        private router : Router
    ) {
        this.createForm = userService.createUserForm()
    }
    create() {
        this.userService.createUser(this.createForm.value).subscribe({
            next: () => {
                this.router.navigate(['user']);
            }
        })
    }
}



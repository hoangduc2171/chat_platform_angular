import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'update-user',
    template: `<user-form [formName]="updateForm"></user-form>`,
    styleUrls: ['./update.component.scss']
})

export class FeUpdateUserComp {
    @Input() user! : User;
    updateForm! : FormGroup;
    constructor(
        private router : Router,
        private userService : UserService,
    ) {
        this.updateForm = userService.createUserForm();
    }

    ngOnInit(): void {
        this.updateForm.patchValue(this.user);
    }

    update() {
        this.userService.updateUser(this.user.id, this.updateForm.value).subscribe({
            next: () => {
                this.router.navigate(['users']);
            }
        });
    }
}
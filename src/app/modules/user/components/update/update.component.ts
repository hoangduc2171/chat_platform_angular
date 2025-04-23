import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'update-user',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})

export class FeUpdateUserComp {
    @Input() user! : User;
    updateForm = new FormGroup({
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        email: new FormControl(''),
        avatar: new FormControl('')
    })

    constructor(private router : Router,private userService : UserService) { }

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
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from '../../services/user.service';


@Component({
    selector: 'feature-user-detail',
    templateUrl: './detail.component.html',
    styleUrls: [
        './detail.component.scss'
    ]
})

export class FeatureUserDetailComp {
    user! : any;
    constructor(
        private activeRouter : ActivatedRoute, 
        private userService: UserService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.activeRouter.queryParams.subscribe(params => {
            this.user = params;
        })
    }

    delete() {
        this.userService.deleteUser(this.user.id).subscribe({
            next: () => {
                this.router.navigate(['users'])
            }
        });
    }
}
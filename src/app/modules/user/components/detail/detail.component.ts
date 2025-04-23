import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FeatureUserComponent } from '../../user.component';

@Component({
    selector: 'feature-user-detail',
    templateUrl: 'detail.component.html',
    styleUrls: [
        'detail.component.scss'
    ]
})

export class FeatureUserDetailComp {
    user! : any;
    constructor(private router : ActivatedRoute) { }

    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            this.user = params;
        });  
    }
}
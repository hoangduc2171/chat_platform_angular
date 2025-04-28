import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LogOutService } from "src/app/shared/services/logout.service";

@Component({
    selector: 'feature-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss',
        './responsive.scss',
    ]
})

export class FeatureLoginComp {
    constructor (private logOutService: LogOutService, private router: Router) {

    }

    signIn() {
        this.logOutService.checkInLogOut();
        this.router.navigate(['/']);
    }
}
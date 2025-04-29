import { Location } from "@angular/common";
import { Component, ContentChild, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/modules/user/models/user.model";
import { LogOutService } from "src/app/shared/services/logout.service";

let user : User = {
    id: 7,
    first_name: "Michael",
    last_name: "Lawson",
    email: "michael.lawson@reqres.in",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
}

@Component({
    selector: 'layout-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {
    @ViewChild('logOut') logOutButton! : ElementRef;
    isShowDropdown = false;
    isEmpty = false;
    user = user;

    constructor(
        private logOutService : LogOutService, 
        private router: Router,
        private location: Location,
    ) { }
    
    ngAfterViewInit(): void {
        this.logOutButton.nativeElement.onclick = () => {
           this.logOutService.isLogOut();
           this.router.navigate(['/auth/login']);
        }
    }

    goBack() {
        this.location.back();
    }
}
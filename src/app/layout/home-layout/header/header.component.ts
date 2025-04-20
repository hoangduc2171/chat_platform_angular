import { Component } from "@angular/core";
import { User } from "src/app/features/user/models/user.model";

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
    isShowDropdown = false;
    isEmpty = false;
    user = user;
}
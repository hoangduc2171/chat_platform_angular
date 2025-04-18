import { Component } from "@angular/core";
import { User } from "src/app/types/api";

let user : User = {
    id: 7,
    fullname: "Hoàng Tiến Đức",
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
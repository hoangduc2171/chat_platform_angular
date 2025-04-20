import { Component, Input } from "@angular/core";
import { User } from "../../models/user.model";
@Component({
    selector: 'user-update',
    template:  `
        <input type="text" [value]="user.first_name">
        
    `
})

export class FeatureUserUpdate {
    @Input() user! : User;
}
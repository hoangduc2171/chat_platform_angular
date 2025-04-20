import { Component } from "@angular/core";
import { UserService } from './services/user.service';
import { User } from "./models/user.model";
import trackByfn from "src/app/utils/track-id";

@Component({
    selector: 'feature-user',
    templateUrl: './user.component.html',
    styleUrls: [
        './user.component.scss'
    ]
})

export class FeatureUserComponent {
    trackByfn(index: number, item: any) : any {
        return item.id;
    }
    users! : User[];
    constructor(private userService : UserService) { }
    
    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users.data;
        })    
    }
}   
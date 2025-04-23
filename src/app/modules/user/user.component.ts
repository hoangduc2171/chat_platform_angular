import { Component } from "@angular/core";
import { UserService } from './services/user.service';
import { User } from "./models/user.model";
import { Router } from '@angular/router';

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
    lengthOfUsers! : number;
    constructor(private userService : UserService, private router : Router) { }
    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            this.lengthOfUsers = this.users.length;
        })    
    }
    showDetailUser(id: number) {
        this.router.navigate(['users/detail'], { queryParams: this.users.find(user => user.id === id) });
    }
}   


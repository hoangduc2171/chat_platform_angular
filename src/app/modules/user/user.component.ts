import { ChangeDetectorRef, Component, SimpleChanges } from "@angular/core";
import { UserService } from './services/user.service';
import { User } from "./models/user.model";
import { Router } from '@angular/router';
import { UserTransferService } from './services/data-transfer.service';

@Component({
    selector: 'feature-user',
    templateUrl: './user.component.html',
    styleUrls: [
        './user.component.scss'
    ]
})

export class FeatureUserComponent {
    users! : User[];
    lengthOfUsers! : number;

    trackByfn(index: number, item: any) : any {
        return item.id;
    }

    constructor(
        private userService : UserService, 
        private router : Router,
    ) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            this.lengthOfUsers = this.users.length;
        })
    }
    
    showDetailUser(id: number) {
        this.router.navigate(['users/detail', id], { queryParams: this.users.find(user => user.id === id) });
    }
}   


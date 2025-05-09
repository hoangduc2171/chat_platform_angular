import { Component } from "@angular/core";
import { UserService } from '../../services/user.service';
import { User } from "../../models/user.model";
import { Router } from '@angular/router';
import { LoadingService } from "src/app/shared/loading/loading.service";

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss']
})

export class AppListUserComponent {
    users! : User[];
    lengthOfUsers! : number;

    trackByfn(index: number, item: any) : any {
        return item.id;
    }

    constructor(
        private userService : UserService, 
        private router : Router,
        private loading: LoadingService
    ) { }

    ngOnInit(): void {
        let loading = this.loading;
        loading.show();
        this.userService.getUsers().subscribe(users => {
            loading.hide();
            this.users = users;
            this.lengthOfUsers = this.users.length;
        })
    }
    
    showDetailUser(id: number) {
        this.router.navigate(['/users/detail', id], { queryParams: this.users.find(user => user.id === id) });
    }
}
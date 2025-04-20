import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private apiUrl = 'https://reqres.in/api/users?page=2';
    constructor(private http : HttpClient) { }

    getUsers() : Observable<any> {
        return this.http.get(this.apiUrl);
    }

    getUserById(users: User[], id: number) {
        return users.find(user => user.id === id) as User;
    }
}

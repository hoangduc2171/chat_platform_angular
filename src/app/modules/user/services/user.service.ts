import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private apiUrl = 'https://6804980a79cb28fb3f5b5662.mockapi.io/users';
    constructor(private http : HttpClient) { }

    getUsers() : Observable<any> {
        return this.http.get(this.apiUrl);
    }

    createUser(user: User): Observable<any> {
        return this.http.post(this.apiUrl, user);
    }

    updateUser(id: number,user: User): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, user);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

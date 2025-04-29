import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppRoutingModule } from '../../../app-routing.module';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoadingService } from "src/app/shared/loading/loading.service";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private apiUrl = 'https://6804980a79cb28fb3f5b5662.mockapi.io/users';
    constructor(
        private http : HttpClient, 
        private formBuilder : FormBuilder
    ) { }

    createUserForm() : FormGroup {
        return this.formBuilder.group({
            first_name: [
                '', [Validators.required]
            ], 
            last_name: [
                '', [Validators.required]
            ], 
            email: [
                '', [
                    Validators.required,
                    Validators.email
                ]
            ],
            desc: '',
        })
    }

    getUsers() : Observable<any> {
        return this.http.get(this.apiUrl);
    }

    createUser(user: FormData): Observable<any> {
        return this.http.post(this.apiUrl, user);
    }

    updateUser(id: number,user: FormData): Observable<any> {
        
        return this.http.put(`${this.apiUrl}/${id}`, user);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

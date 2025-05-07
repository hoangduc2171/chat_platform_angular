import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private apiUrl = 'https://6804980a79cb28fb3f5b5662.mockapi.io/decentralization';
    constructor(private http: HttpClient) {  }
    getDecentralizationApi() : Observable<any> {
        return this.http.get(this.apiUrl)
    }

    checkInLogOut() {
        localStorage.setItem('admin', 'duc');
        console.log('Check in success!');
    }

    isLogOut() {
        localStorage.removeItem('admin');
    }
}
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class LogOutService {
    checkInLogOut() {
        localStorage.setItem('admin', 'duc');
        console.log('Check in success!');
    }
    isLogOut() {
        localStorage.removeItem('admin');
    }
}
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LogOutService } from "src/app/shared/services/logout.service";
import { ToastService } from '../../../shared/materials/toast/toast.service';

@Component({
    selector: 'feature-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss',
    ]
})

export class FeatureLoginComp {
    loginForm! : FormGroup;
    constructor (
        private logOutService: LogOutService,
        private router: Router,
        private http: HttpClient,
        private toastService : ToastService
    ) {
        this.loginForm = new FormGroup({
            username: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$')
            ])
        }) 
    }

    signIn() {
        let form = this.loginForm;
        let router = this.router;
        let toast = this.toastService;
        const logOutService = this.logOutService;
        this.http.get('https://6804980a79cb28fb3f5b5662.mockapi.io/decentralization').subscribe({
            next(data: any) {
                const isAccount = data.filter((element: any) => {
                    return element.username == form.value.username;
                })[0];
                if (!!isAccount) {
                    if (isAccount.password === form.value.password) {
                        logOutService.checkInLogOut();
                        router.navigate(['/'])
                    }
                } else {
                    toast.showToast('Tài khoản không tồn tại!', 'error')
                }
            },
        })
    }
}
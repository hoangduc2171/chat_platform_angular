import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ToastService } from '../../../shared/materials/toast/toast.service';
import { LoadingService } from "src/app/shared/loading/loading.service";
import { throttleTime } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

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
        private authService: AuthService,
        private router: Router,
        private toastService : ToastService,
        private loading: LoadingService
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
        const authService = this.authService;
        let loading = this.loading;
        loading.show();
        this.authService.getDecentralizationApi().subscribe({
            next(data: any) {
                const isAccount = data.filter((element: any) => {
                    return element.username == form.value.username;
                })[0];
                if (!!isAccount) {
                    if (isAccount.password === form.value.password) {
                        authService.checkInLogOut();
                        loading.hide();
                        toast.showToast('Đăng nhập thành công', 'success', 5000);
                        router.navigate(['/users'])
                    } else {
                        loading.hide();
                        toast.showToast('Mật khẩu không đúng!', 'error')
                    }
                } else {
                    loading.hide();
                    toast.showToast('Tài khoản không tồn tại!', 'warning')
                }
            },
        })
    }
}
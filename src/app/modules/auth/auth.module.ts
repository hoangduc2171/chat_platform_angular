import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialsModule } from "src/app/shared/materials/materials.module";
import { FeatureLoginComp } from "./login/login.component";
import { FeForgetComp } from "./forget/forget.component";
import { RouterLink, RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthLayoutModule } from "src/app/shared/layout/auth-layout/auth.module";

const routes : Routes = [
    { path: '', component: FeatureLoginComp },
    { path: 'forget', component: FeForgetComp },
]

@NgModule({
    imports: [
        CommonModule,
        MaterialsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        AuthLayoutModule
    ],
    declarations: [FeatureLoginComp, FeForgetComp],
})

export class AuthModule {

}
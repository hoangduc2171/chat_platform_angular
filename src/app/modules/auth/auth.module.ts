import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AuthComponent } from "./auth.component";
import { MaterialsModule } from "src/app/shared/materials/materials.module";
import { FeatureLoginComp } from "./login/login.component";
import { FeForgetComp } from "./forget/forget.component";
import { RouterLink, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MaterialsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    declarations: [AuthComponent, FeatureLoginComp, FeForgetComp],
})

export class AuthModule {

}
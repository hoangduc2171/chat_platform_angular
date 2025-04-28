import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AuthComponent } from "./auth.component";
import { MaterialsModule } from "src/app/shared/materials/materials.module";
import { FeatureLoginComp } from "./login/login.component";

@NgModule({
    imports: [CommonModule, MaterialsModule],
    declarations: [AuthComponent, FeatureLoginComp],
})

export class AuthModule {

}
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { MaterialsModule } from "../../shared/materials/materials.module";
import { HomeLayoutModule } from "src/app/shared/layout/home-layout/home-layout.module";

const routes : Routes = [
    { path: '', component: HomeComponent }
]

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialsModule,
        HomeLayoutModule
]
})

export class HomeModule {
    
}
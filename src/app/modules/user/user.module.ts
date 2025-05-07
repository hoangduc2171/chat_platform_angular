import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FeatureUserComponent } from './user.component';
import { RouterModule, Routes } from "@angular/router";
import { MaterialsModule } from "src/app/shared/materials/materials.module";
import { FeUserCreateComp } from "./components/create/create.component";
import { FeUpdateUserComp } from "./components/update/update.component";
import { FeatureUserDetailComp } from "./components/detail/detail.component";
import { HomeLayoutModule } from "src/app/shared/layout/home-layout/home-layout.module";

const routes : Routes = [
    { path: '', component: FeatureUserComponent},
    { path: 'detail/:id', component: FeatureUserDetailComp}
]

@NgModule({
    declarations: [
        FeatureUserComponent, 
        FeUserCreateComp,
        FeUpdateUserComp,
        FeatureUserDetailComp
    ], 
    imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialsModule,
    HomeLayoutModule
],
    exports: [FeatureUserComponent]
})

export class FeatureUserModule {
    
}
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FeatureUserComponent } from './user.component';
import { RouterModule } from "@angular/router";
import { MaterialsModule } from "src/app/shared/materials/materials.module";
import { FeUserCreateComp } from "./components/create/create.component";
import { FeUpdateUserComp } from "./components/update/update.component";
import { FeatureUserDetailComp } from "./components/detail/detail.component";

@NgModule({
    declarations: [
        FeatureUserComponent, 
        FeUserCreateComp,
        FeUpdateUserComp,
        FeatureUserDetailComp
    ], 
    imports: [
    CommonModule,
    RouterModule,
    MaterialsModule,
],
    exports: [FeatureUserComponent]
})

export class FeatureUserModule {
    
}
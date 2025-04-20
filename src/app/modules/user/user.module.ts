import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FeatureUserComponent } from './user.component';
import { RouterModule } from "@angular/router";
import { FeatureUserUpdateModule } from "./components/update/update.module";
import { MatModalModule } from "src/app/shared/components/material/modal/modal.module";

@NgModule({
    declarations: [FeatureUserComponent], 
    imports: [
    CommonModule,
    RouterModule,
    MatModalModule,
    FeatureUserUpdateModule
],
    exports: [FeatureUserComponent]
})

export class FeatureUserModule {
    
}
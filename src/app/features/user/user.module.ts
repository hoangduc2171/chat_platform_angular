import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FeatureUserComponent } from './user.component';
import { RouterModule } from "@angular/router";
import { MatModalModule } from "../../material/modal/modal.module";
import { FeatureUserUpdateModule } from "./components/update/update.module";

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
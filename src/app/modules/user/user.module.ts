import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FeatureUserComponent } from './user.component';
import { RouterModule } from "@angular/router";
import { MatModalModule } from "src/app/shared/components/material/modal/modal.module";
import { FeUserCreateModule } from "./components/create/create.module";
import { MatButtonModule } from "../../shared/components/material/button/button.module";

@NgModule({
    declarations: [FeatureUserComponent], 
    imports: [
    CommonModule,
    RouterModule,
    MatModalModule,
    FeUserCreateModule,
    MatButtonModule, 
    FeUserCreateModule
],
    exports: [FeatureUserComponent]
})

export class FeatureUserModule {
    
}
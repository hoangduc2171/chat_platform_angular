import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FeatureUserComponent } from './user.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [FeatureUserComponent], 
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [FeatureUserComponent]
})

export class FeatureUserModule {
    
}
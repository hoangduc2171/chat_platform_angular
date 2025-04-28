import { NgModule } from "@angular/core";
import { FeatureLoginComp } from "./login.component";
import { CommonModule } from "@angular/common";
import { MatModalModule } from "src/app/shared/components/material/modal/modal.module";
import { MatButtonModule } from "src/app/shared/components/material/button/button.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [FeatureLoginComp],
    imports: [
        CommonModule,
        MatModalModule, 
        MatButtonModule,
        ReactiveFormsModule
    ],
    exports: [FeatureLoginComp]
})

export class FeatureLoginModule {
    
}
import { NgModule } from "@angular/core";
import { FeatureLoginComp } from "./login.component";
import { CommonModule } from "@angular/common";
import { MatModalModule } from "src/app/shared/components/material/modal/modal.module";

@NgModule({
    declarations: [FeatureLoginComp],
    imports: [
        CommonModule,
        MatModalModule
    ],
    exports: [FeatureLoginComp]
})

export class FeatureLoginModule {
    
}
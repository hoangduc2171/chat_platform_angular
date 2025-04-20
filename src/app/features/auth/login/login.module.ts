import { NgModule } from "@angular/core";
import { FeatureLoginComp } from "./login.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [FeatureLoginComp],
    imports: [CommonModule],
    exports: [FeatureLoginComp]
})

export class FeatureLoginModule {
    
}
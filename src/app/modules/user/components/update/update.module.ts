import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FeUpdateUserComp } from "./update.component";

@NgModule({
    declarations: [FeUpdateUserComp],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [FeUpdateUserComp]
})

export class FeUpdateUserModule {
    
}
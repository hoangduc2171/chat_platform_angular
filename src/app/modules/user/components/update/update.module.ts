import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FeUpdateUserComp } from "./update.component";
import { MatUserFormModule } from "../../../../shared/components/material/form/user-form.module";

@NgModule({
    declarations: [FeUpdateUserComp],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    MatUserFormModule
],
    exports: [FeUpdateUserComp]
})

export class FeUpdateUserModule {
    
}
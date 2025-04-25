

import { NgModule } from "@angular/core";
import { FeUserCreateComp } from "./create.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatUserFormModule } from "../../../../shared/components/material/form/user-form.module";

@NgModule({
    declarations: [FeUserCreateComp],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    MatUserFormModule
],
    exports: [FeUserCreateComp]
})

export class FeUserCreateModule {
    
}



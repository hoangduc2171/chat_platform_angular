

import { NgModule } from "@angular/core";
import { FeUserCreateComp } from "./create.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [FeUserCreateComp],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [FeUserCreateComp]
})

export class FeUserCreateModule {}



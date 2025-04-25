import { NgModule } from "@angular/core";
import { MatUserFormComp } from "./user-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [MatUserFormComp], 
    imports: [
        CommonModule,
        ReactiveFormsModule
    ], 
    exports: [MatUserFormComp]
})

export class MatUserFormModule {
    
}
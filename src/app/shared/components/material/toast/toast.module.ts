import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToastComp } from "./toast.component";

@NgModule({
    declarations: [MatToastComp], 
    imports: [CommonModule], 
    exports: [MatToastComp]
})

export class MatToastModule {
    
}
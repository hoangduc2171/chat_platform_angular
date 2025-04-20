import { NgModule } from "@angular/core";
import { MatModalComp } from "./modal.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MatModalComp],
    imports: [CommonModule],
    exports: [MatModalComp]
})

export class MatModalModule {
    
}
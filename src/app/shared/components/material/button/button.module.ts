import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonComp } from "./button.component";

@NgModule({
    declarations: [MatButtonComp],
    imports: [CommonModule],
    exports: [MatButtonComp]
})

export class MatButtonModule {
    
} 
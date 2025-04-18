import { NgModule } from "@angular/core";
import { MatInputWarpperComp } from "./field-warpper.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MatInputWarpperComp],
    imports: [
        CommonModule,
    ],
    exports: [MatInputWarpperComp]
})

export class MatInputWarpperModule {

}
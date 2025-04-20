import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { DropdownModule } from 'src/app/material/dropdown/dropdown.module';
import { MatModalModule } from "../../../material/modal/modal.module";

@NgModule({
    declarations: [
        HeaderComponent, 
    ], 
    imports: [
        CommonModule,
        DropdownModule,
        MatModalModule
    ],
    exports: [HeaderComponent]
})

export class HeaderModule {
    
}
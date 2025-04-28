import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatModalModule } from "../../../material/modal/modal.module";
import { DropdownModule } from '../../../material/dropdown/dropdown.module';
import { LogOutService } from 'src/app/shared/services/logout.service';

@NgModule({
    declarations: [
        HeaderComponent, 
    ], 
    providers: [
        LogOutService
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
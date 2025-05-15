import { NgModule } from "@angular/core";
import { PartnerDetailComponent } from "./partner-detail/partner-detail.component";
import { PartnerListComponent } from "./partner-list/partner-list.component";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MaterialsModule } from "src/app/shared/materials/materials.module";
import { HttpClientModule } from "@angular/common/http";
import { DateTransformPipe } from "src/app/pipes/date-transform.pipe";
import { PartnerCreateComponent } from "./partner-create/partner-create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CurrencyPipeVND } from "src/app/pipes/currency.pipe";

const routes : Routes = [
    { path: '', component: PartnerListComponent }, 
    { path: 'create', component: PartnerCreateComponent },
]

@NgModule({
    declarations: [
        PartnerDetailComponent,
        PartnerListComponent,
        DateTransformPipe, 
        CurrencyPipeVND,
        PartnerCreateComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        PartnerDetailComponent,
        PartnerListComponent, 
        PartnerCreateComponent
    ]
})

export class PartnerModule {
    
}
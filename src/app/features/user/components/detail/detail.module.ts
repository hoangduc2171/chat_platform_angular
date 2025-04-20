import { Input, NgModule } from "@angular/core";
import { FeatureUserDetailComp } from './detail.component';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { MatModalModule } from "src/app/material/modal/modal.module";
import { FeatureUserUpdateModule } from "../update/update.module";
import { User } from "../../models/user.model";
import { UserService } from '../../services/user.service';

@NgModule({
    declarations: [FeatureUserDetailComp],
    imports: [
        CommonModule,
        MatModalModule,
        FeatureUserUpdateModule
    ], 
    exports: [FeatureUserDetailComp]
})

export class FeatureUserDetailModule {
    
}
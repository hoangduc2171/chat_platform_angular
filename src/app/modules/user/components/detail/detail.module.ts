import { Input, NgModule } from "@angular/core";
import { FeatureUserDetailComp } from './detail.component';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { FeatureUserUpdateModule } from "../update/update.module";
import { User } from "../../models/user.model";
import { UserService } from '../../services/user.service';
import { MatModalModule } from "src/app/shared/components/material/modal/modal.module";

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
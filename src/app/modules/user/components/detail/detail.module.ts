import { Input, NgModule } from "@angular/core";
import { FeatureUserDetailComp } from './detail.component';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../models/user.model";
import { UserService } from '../../services/user.service';
import { MatModalModule } from "src/app/shared/components/material/modal/modal.module";
import { MatButtonModule } from "src/app/shared/components/material/button/button.module";
import { FeUpdateUserModule } from "../update/update.module";

@NgModule({
    declarations: [FeatureUserDetailComp],
    imports: [
        CommonModule,
        MatModalModule,
        MatButtonModule,
        FeUpdateUserModule
    ], 
    exports: [FeatureUserDetailComp]
})

export class FeatureUserDetailModule {
    
}
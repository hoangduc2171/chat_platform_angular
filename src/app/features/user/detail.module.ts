import { NgModule } from "@angular/core";
import { FeatureUserDetailComp } from './detail.component';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@NgModule({
    declarations: [FeatureUserDetailComp],
    imports: [CommonModule], 
    exports: [FeatureUserDetailComp]
})

export class FeatureUserDetailModule {
    constructor(private route : ActivatedRoute) {
        this.route.params.subscribe(param => {
            console.log(param);
        })
    }
}
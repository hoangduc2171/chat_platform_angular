import { Component } from "@angular/core";
import { BreadcumbService } from './breadcumb.service';

@Component({
    selector: 'app-breadcumb',
    templateUrl: './breadcumb.component.html'
})

export class BreadcumbComponent {
    breadcumbs! : {path: any, name: string}[]; 
    constructor(private breadcumbService: BreadcumbService) { }
}
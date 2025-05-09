import { Injectable } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class BreadcumbService {
    constructor(private activatedRoute: ActivatedRoute) { }

    createBreadcumb(breadcumb: any[]) {
        
    }
}
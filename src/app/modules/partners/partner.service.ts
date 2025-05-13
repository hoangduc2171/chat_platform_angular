import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Partner } from "src/app/models/type";

@Injectable({
    providedIn: 'root',
})

export class PartnerService {
    private partnerApi = 'https://68215b71259dad2655af0524.mockapi.io/partners';
    constructor(private http: HttpClient) { 
        
    }

    getListPartner(): Observable<Partner[]> {
        return this.http.get<Partner[]>(this.partnerApi);
    }
}
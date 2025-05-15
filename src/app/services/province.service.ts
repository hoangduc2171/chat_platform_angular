import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class ProvinceService {
    private provinceUrl = 'https://provinces.open-api.vn/api/'
    constructor(private http: HttpClient) { }

    getProvinces(): Observable<any> {
        return this.http.get(this.provinceUrl);
    }

    getDistricts(provinceId: number): Observable<any> {
        return this.http.get(`${this.provinceUrl}p/${provinceId}?depth=2`).pipe(
            map((data: any) => data.districts)
        )
    }

    getWards(provinceId: number): Observable<any> {
        return this.http.get(`${this.provinceUrl}d/${provinceId}?depth=2`).pipe(
            map((data: any) => data.wards)
        )
    }
}
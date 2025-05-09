import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserTransferService {
    private data: any;

    getData() {
        return this.data;
    }

    setData(value: any) {
        this.data = value;
    }

}
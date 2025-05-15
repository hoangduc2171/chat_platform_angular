import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'currencyVND'
})
export class CurrencyPipeVND implements PipeTransform {
    transform(value: number): string {
        if (value === null || value === undefined || value === 0) {
            return 'Miễn phí';
        }
        return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND'});
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'dateTransform' })
export class DateTransformPipe implements PipeTransform {
    transform(value: Date) {
        const date = typeof value === 'string' || typeof value === 'number' ? new Date(value) : value;

        let daysOfWeek = ['Chủ nhật', 'Thứ Hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        let day = daysOfWeek[date.getDay()];
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${date.getDate()}/${month}/${year}`
    }
}
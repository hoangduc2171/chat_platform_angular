import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Partner } from "src/app/models/type";

const services = [
    {
        id: 1,
        name: 'Trải nghiệm',
        price: 0,
        caption: 'Miễn phí sử dụng các tính năng cơ bản với thời hạn 1 tháng',
        features: [
            { content: 'Tích hợp đa nền tảng', type: 'unlimited' },
            { content: 'Lập lịch chăm sóc', type: 'unlimited' },
            { content: 'Quảng cáo facebook', type: 'unlimited' },
            { content: 'Giới hạn 5 ứng dụng', type: 'limited' },
            { content: 'Giới hạn 15 nhân viên', type: 'limited' }
        ],
        image: 'https://example.com/image1.jpg',
        term: '1 month',
        createdAt: new Date()
    },
    {
        id: 2,
        name: 'Cơ bản',
        price: 500000,
        caption: 'Quản lý khách hàng một cách dễ dàng và nhiều tính năng mở rộng',
        features: [
            { content: 'Tích hợp đa nền tảng', type: 'unlimited' },
            { content: 'Lập lịch chăm sóc', type: 'unlimited' },
            { content: 'Quảng cáo facebook', type: 'unlimited' },
            { content: 'Giới hạn 15 ứng dụng', type: 'limited' },
            { content: 'Giới hạn 50 nhân viên', type: 'limited' }
        ],
        image: 'https://example.com/image2.jpg',
        term: '6 months',
    },
    {
        id: 3,
        name: 'Tiêu chuẩn',
        price: 2000000,
        caption: 'Mở rộng báo cáo, cung cấp nhiều tính năng nội bộ',
        features: [
            { content: 'Chatbot marketing', type: 'unlimited' },
            { content: 'Tự động đề xuất sản phẩm', type: 'unlimited' },
            { content: 'Quy trình nội bộ tự động', type: 'unlimited' },
            { content: 'Tạo đánh giá sau mua hàng', type: 'unlimited' },
            { content: 'Quản lý khách hàng tập trung và thông minh theo đặc thù ngành nghề', type: 'limited' },
            { content: 'Giới hạn 50 ứng dụng', type: 'limited' },
            { content: 'Giới hạn 150 nhân viên', type: 'limited' },
        ],
        image: 'https://example.com/image3.jpg',
        term: '12 months',
    },
    {
        id: 4,
        name: 'Nâng cao',
        price: 5000000,
        caption: 'Mở khóa toàn bộ tính năng của ứng dụng',
        features: [
            { content: 'Không giới hạn page', type: 'unlimited' },
            { content: 'Không giới hạn ứng dụng', type: 'unlimited' },
            { content: 'Không giới hạn khách hàng', type: 'unlimited' },
            { content: 'Tích hợp hệ thống doanh nghiệp', type: 'unlimited' },
            { content: 'Không giới hạn nhân viên', type: 'unlimited' }
        ],
        image: 'https://example.com/image3.jpg',
        term: '12 months',
    }
];

@Injectable({
    providedIn: 'root',
})

export class PartnerService {
    
    private partnerApi = 'https://68215b71259dad2655af0524.mockapi.io/partners';
    constructor(private http: HttpClient) { 
        
    }   
    // Fake API Service Package
    getServicePackages(): Observable<any> {
        return from([services]);
    }

    getListPartner(): Observable<Partner[]> {
        return this.http.get<Partner[]>(this.partnerApi);
    }

    createPartner(partner: Partner): Observable<Partner> {
        return this.http.post<Partner>(this.partnerApi, partner);
    }
}
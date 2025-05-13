import { Component, OnInit } from '@angular/core';
import { JobArea, Partner } from 'src/app/models/type';
import { PartnerService } from '../partner.service';
import { LoadingService } from '../../../shared/loading/loading.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {
  partners!: Partner[];
  partnersLength: number = 0;
  jobAreas: JobArea[] = [
    {
      id: 1, 
      name: 'Sản phẩm điện tử'
    },
    {
      id: 2, 
      name: 'Gia dụng'
    },
    {
      id: 3, 
      name: 'Kinh doanh online'
    },
    {
      id: 4, 
      name: 'Bán lẻ'
    },
    {
      id: 5, 
      name: 'Dịch vụ'
    },
    {
      id: 6, 
      name: 'Bất động sản'
    },
    {
      id: 7, 
      name: 'Tài chính'
    }
  ];

  constructor(
    private partnerService: PartnerService,
    private loading: LoadingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading.show();
    this.partnerService.getListPartner().subscribe(data => {
      this.partners = data;
      this.partnersLength = this.partners.length;
      this.loading.hide();
    })
  }

  getJobArea(id: number) {
    return this.jobAreas.find(area => area.id === id)?.name;
  }

  onRedirectCreate() {
    this.router.navigate(['partners/create']);
  }
}

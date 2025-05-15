import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { JobArea, Partner, Province } from "src/app/models/type";
import { ProvinceService } from '../../../services/province.service';
import { ServicePackage } from '../../../models/type';
import { PartnerService } from "../partner.service";
import { ToastService } from '../../../shared/materials/toast/toast.service';
import { Router } from "@angular/router";
import { LoadingService } from "src/app/shared/loading/loading.service";

@Component({
    selector: 'app-partner-create', 
    templateUrl: `./partner-create.component.html`, 
    styleUrls: [
        './partner-create.component.scss'
    ]
})

export class PartnerCreateComponent {
    isShowForm: boolean = true;
    partnerForm: FormGroup;

    serviceForm: FormGroup;

    selectedJobArea: any[] = [];
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
    provinces: Province[] = []; 
    districts: Province[] = [];
    wards: Province[] = [];
    servicePackages : ServicePackage[] = [];

    constructor(
      private provinceService: ProvinceService,
      private partnerService: PartnerService,
      private fb: FormBuilder,
      private toastService: ToastService,
      private router: Router,
      private loading: LoadingService,
    ) {
      // Create Partner Form
      this.partnerForm = this.fb.group({
        name: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern('^0[0-9]{9,10}$')]],
        email: ['', [Validators.required, Validators.email]],
        jobArea: ['', [Validators.required]],
        province: '',
        district: '',
        ward: '',
      });
      // Create Service Form
      this.serviceForm = this.fb.group({
        serviceName: ['', [Validators.required]],
        serviceTerm: ['', [Validators.required]],
      });
      // Get Province List
      this.provinceService.getProvinces().subscribe((provinces: any) => {
        this.provinces = provinces;
      });
      // Get Service Package List
      this.partnerService.getServicePackages().subscribe((servicePackages: any) => {
        this.servicePackages = servicePackages;
      })
    }

    // --------- Validation ---------

    // Check required validation
    onCheckRequired(name: string) {
      let control = this.partnerForm.get(name);
      if (control?.errors?.['required'] && control?.touched) {
        return true;
      } 
      return false;
    }
    // Check email validation
    onCheckEmail(name: string) {
      let control = this.partnerForm.get(name);
      if (control?.errors?.['email'] && control?.touched) {
        return true;
      } 
      return false;
    }
    // Check phone validation
    onCheckPhone(name: string) {
      let control = this.partnerForm.get(name);
      if (control?.errors?.['pattern'] && control?.touched) {
        return true;
      } 
      return false;
    }

    // Listen event change job area
    onJobAreaChange() {
      this.selectedJobArea.push(this.partnerForm.get('jobArea')?.value);
      this.partnerForm.get('jobArea')?.setValue(this.selectedJobArea);
    } 

    // Listen event change province and get data district
    onProvinceChange() {
      let selectedProvince = this.partnerForm.get('province')?.value;
      if (selectedProvince) {
        this.provinceService.getDistricts(selectedProvince).subscribe(
          (districts: any) => { this.districts = districts }
        )
      }
    }
    // Listen event change province and get data ward
    onDistrictChange() {
      let selectedDistrict = this.partnerForm.get('district')?.value;
      if (selectedDistrict) {
        this.provinceService.getWards(selectedDistrict).subscribe(
          (wards: any) => { this.wards = wards }
        )
      }
    } 
    // remove job area handle
    removeJobArea(name: string) {
        let index = this.selectedJobArea.findIndex(area => area == name);
        this.selectedJobArea.splice(index, 1);
    }

    onSubmit() {
      this.loading.show();
      if (this.serviceForm.invalid) {
        this.toastService.showToast('Vui lòng trọn gói dịch vụ', 'warning', 5000)
      } else {
        this.partnerForm.get('jobArea')?.setValue(this.selectedJobArea);
        // Change return DataForm to Partner type
        let partnerInforData = {
          ...this.partnerForm.value,
          address: {
            province: this.partnerForm.get('province')?.value,
            district: this.partnerForm.get('district')?.value,
            ward: this.partnerForm.get('ward')?.value,
          }
        };
        ['province', 'district', 'ward'].forEach(key => delete partnerInforData[key]);
        let partnerServiceData = {
          ...this.serviceForm.value, 
          serviceChoose: {
            id: this.serviceForm.get('serviceName')?.value,
            term: this.serviceForm.get('serviceTerm')?.value
          }
        };
        ['serviceName', 'serviceTerm'].forEach(key => delete partnerServiceData[key]);
        let data : Partner = {...partnerInforData, ...partnerServiceData}
        console.log(data);
        
        this.partnerService.createPartner(data).subscribe({
          next: () => {
            this.loading.hide();
            this.router.navigate(['/partners'])
          }
        })
      }
    }

    onToggleForm() {
        this.isShowForm = !this.isShowForm;
    }
    // For Choose Service Forms
} 
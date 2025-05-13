import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { JobArea } from "src/app/models/type";

@Component({
    selector: 'app-partner-create', 
    templateUrl: `./partner-create.component.html`, 
    styleUrls: [
        './partner-create.component.scss'
    ]
})

export class PartnerCreateComponent {
    partnerForm: FormGroup = new FormGroup({
        jobArea: new FormControl(),
    })
    selectedJobArea: string[] = [];
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
    
    ngOnInit(): void {
        this.partnerForm.get('jobArea')?.valueChanges.subscribe(data => {
                this.selectedJobArea.push(data)
                console.log(this.selectedJobArea);
            }
        );
    }

    removeJobArea(name: string) {
        return this.selectedJobArea.find(area => area === name);
    }
} 
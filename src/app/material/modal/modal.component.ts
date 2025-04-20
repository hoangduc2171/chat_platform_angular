import { Component, ContentChild, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector: 'mat-modal',
    templateUrl: 'modal.component.html',
    styleUrls: [
        'modal.component.scss'
    ]
})

export class MatModalComp {
    @ViewChild('modal') modalContainer! : ElementRef<HTMLElement>;
    @ViewChild('close') closeButton! : ElementRef<HTMLElement>;
    @ContentChild('close') childCloseButton! : ElementRef<HTMLElement>;
    @ContentChild('modalChild') childComponent! : any;

    @Input() modalTitle! : string; 
    isShowModal : boolean = false;

    toggleModal(params?: unknown) {
        if (params && this.childComponent) {
            this.childComponent.data = params;
        }
        this.isShowModal = !this.isShowModal;
    }
    ngAfterViewInit(): void {
        const modalElement = this.modalContainer.nativeElement;
        let closeButtons = [this.childCloseButton, this.closeButton];
        modalElement.onclick = () => {
            this.toggleModal();
        }
        // Ngăn sự kiện nổi bọt từ element
        modalElement.firstChild?.addEventListener('click', (e) => {
            e.stopPropagation();
        })
        // Nút tắt Modal trong modal
        closeButtons.forEach(button => {
            if (button) {
                button.nativeElement?.addEventListener('click', () => {
                    this.toggleModal();
                })
            }
        })
    }
}
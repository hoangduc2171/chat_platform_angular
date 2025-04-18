import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from './user.modal';

let users : User[] = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg"
    }
];

@Component({
    selector: 'feature-user-detail',
    template: `
        <div class="user-detail-container">
            <div class="user-detail-images">
                <div class="user-detail-background"></div>
                <img class="user-detail-avatar" [src]="user.avatar" [alt]="user.last_name">
            </div>
            <div class="user-detail-infor">
                <div class="user-infor-heading">
                    <div class="user-infor-name">
                        <h1>{{ user.first_name }}</h1>
                        <i class="user-infor-fullname">({{ user.first_name }} {{ user.last_name }})</i>
                    </div>
                    <p class="user-infor-email">📩 {{ user.email }}</p>
                </div>
                <p class="user-infor-desc" *ngIf="user.desc; else noDesc">{{ user.desc }}</p>
                <ng-template #noDesc>
                    <p class="user-infor-desc">🧐 Hiện tại chưa có mô tả</p>
                </ng-template>
                
            </div>
        </div>
        
        
    `,
    styleUrls: [
        './detail.component.scss'
    ]
})

export class FeatureUserDetailComp {
    user! : User;
    constructor(private route : ActivatedRoute) {
        this.route.params.subscribe(param => {
            this.user = users.filter(user => {
                return user.id == param.id
            })[0];
        })
    }
}
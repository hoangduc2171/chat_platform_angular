
import { Component } from '@angular/core';
import { NavigationStart, Router, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private router: Router, private activatedRoute: ActivatedRoute) { }
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}


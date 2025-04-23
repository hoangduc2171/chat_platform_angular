
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task';

  ngOnInit(): void {
    const numberObservable = new Observable<number>((observer) => {
      observer.next(1); // Phát ra 1
      observer.next(2); // Phát ra 2
      setTimeout(() => {
        observer.next(3); // Phát ra 3 sau 1 giây
        observer.complete(); // Kết thúc luồng
      }, 1000);
    });

    // Subscribe để nhận dữ liệu
    numberObservable.subscribe(data => console.log(data));
  }
}


import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RxJs-App';
  observable = new Observable(() => {
    console.log(Math.ceil(Math.random() * 50));
  });
  subject = new Subject<number>();
  ngOnInit(): void {
    this.observable.subscribe((observer) => observer);
    this.subject.subscribe((result) => console.log(result));
    this.subject.next(50);
    this.subject.next(508);
    setTimeout(() => {
      this.subject.next(657);
    }, 5000);
  }
}

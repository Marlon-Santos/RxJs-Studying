import { Component, OnInit } from '@angular/core';
import { Observable, Subject, range, from } from 'rxjs';
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
  range = range(1, 10);
  subject = new Subject<number>();
  from = from([1, 2, 3, 4, 5, 10, 20, 30, 50]);
  ngOnInit(): void {
    this.observable.subscribe((observer) => observer);
    this.subject.subscribe((result) => console.log(result));
    this.subject.next(50);
    this.subject.next(508);
    setTimeout(() => {
      this.subject.next(657);
    }, 5000);
    this.range.subscribe((result) => console.log(result));
    this.from.subscribe((result) => console.log(result));
  }
}

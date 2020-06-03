import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, takeUntil, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-componentxy',
  templateUrl: './componentxy.component.html',
  styleUrls: ['./componentxy.component.scss'],
})
export class ComponentxyComponent implements OnInit, OnDestroy {
  title = 'RxJs-App';
  subject1 = new Subject<number>();
  interval = interval(1000).pipe(takeUntil(this.subject1));
  subject = new Subject<number>();

  ngOnInit(): void {
    this.subject
      .pipe(
        tap((e) => {
          console.log('tap' + e);
          return e + e;
        }),
        map((j) => {
          console.log('map' + j);
          return j;
        }),
        takeUntil(this.subject1)
      )
      .subscribe((result) => console.log(result + 'subject'));
    this.interval.subscribe((result) => {
      this.subject.next(result);
      console.log(result);
    });
  }
  ngOnDestroy() {
    this.subject1.next();
    this.subject1.complete();
    console.log(interval);
    console.log(this.subject);
    console.log(this.subject1);
    console.log('interval');
  }
}

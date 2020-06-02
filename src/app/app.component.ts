import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RxJs-App';
  test = new Observable(() => {
    console.log(Math.ceil(Math.random() * 50));
  });
  ngOnInit(): void {
    this.test.subscribe((observer) => observer);
  }
}

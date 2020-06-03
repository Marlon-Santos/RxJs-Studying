import { Component, OnInit } from '@angular/core';
import { Observable, Subject, range, from, interval } from 'rxjs';
import { publish, timeout } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

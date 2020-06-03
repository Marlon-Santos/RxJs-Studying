import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, range, from, Subject } from 'rxjs';
import { publish } from 'rxjs/operators';

@Component({
  selector: 'app-testx',
  templateUrl: './testx.component.html',
  styleUrls: ['./testx.component.scss'],
})
export class TestxComponent {
  isActive = true;
}

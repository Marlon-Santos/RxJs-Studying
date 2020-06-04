import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('input') myInput: ElementRef<HTMLInputElement>;
  generator;
  count = [10, 20, 30, 40, 50];
  ngOnInit(): void {
    function* test(test: number[]) {
      yield* test;
    }
    this.generator = test(this.count);
  }
  onChange(): void {
    console.log(this.myInput.nativeElement.value);
    console.log(this.generator.next());
  }
}

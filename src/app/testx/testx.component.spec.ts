import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestxComponent } from './testx.component';

describe('TestxComponent', () => {
  let component: TestxComponent;
  let fixture: ComponentFixture<TestxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

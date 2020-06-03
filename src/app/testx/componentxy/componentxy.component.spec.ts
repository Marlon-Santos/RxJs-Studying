import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentxyComponent } from './componentxy.component';

describe('ComponentxyComponent', () => {
  let component: ComponentxyComponent;
  let fixture: ComponentFixture<ComponentxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

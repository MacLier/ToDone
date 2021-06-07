import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualDayComponent } from './actual-day.component';

describe('ActualDayComponent', () => {
  let component: ActualDayComponent;
  let fixture: ComponentFixture<ActualDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

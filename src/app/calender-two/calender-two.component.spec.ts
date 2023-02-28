import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderTwoComponent } from './calender-two.component';

describe('CalenderTwoComponent', () => {
  let component: CalenderTwoComponent;
  let fixture: ComponentFixture<CalenderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

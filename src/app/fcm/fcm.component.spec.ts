import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCMComponent } from './fcm.component';

describe('FCMComponent', () => {
  let component: FCMComponent;
  let fixture: ComponentFixture<FCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

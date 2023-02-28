import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventActionsTemplateComponent } from './event-actions-template.component';

describe('EventActionsTemplateComponent', () => {
  let component: EventActionsTemplateComponent;
  let fixture: ComponentFixture<EventActionsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventActionsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventActionsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

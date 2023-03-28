import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAndDComponent } from './dand-d.component';

describe('DAndDComponent', () => {
  let component: DAndDComponent;
  let fixture: ComponentFixture<DAndDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAndDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAndDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

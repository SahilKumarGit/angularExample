import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableEachTDComponent } from './common-table-each-td.component';

describe('CommonTableEachTDComponent', () => {
  let component: CommonTableEachTDComponent;
  let fixture: ComponentFixture<CommonTableEachTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTableEachTDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonTableEachTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

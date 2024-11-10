import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonPayrollComponent } from './card-person-payroll.component';

describe('CardPersonPayrollComponent', () => {
  let component: CardPersonPayrollComponent;
  let fixture: ComponentFixture<CardPersonPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPersonPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

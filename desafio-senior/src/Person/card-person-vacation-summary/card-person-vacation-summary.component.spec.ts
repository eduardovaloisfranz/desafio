import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonVacationSummaryComponent } from './card-person-vacation-summary.component';

describe('CardPersonVacationSummaryComponent', () => {
  let component: CardPersonVacationSummaryComponent;
  let fixture: ComponentFixture<CardPersonVacationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonVacationSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPersonVacationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

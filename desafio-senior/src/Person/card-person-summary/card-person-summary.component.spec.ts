import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonSummaryComponent } from './card-person-summary.component';

describe('CardPersonSummaryComponent', () => {
  let component: CardPersonSummaryComponent;
  let fixture: ComponentFixture<CardPersonSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPersonSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

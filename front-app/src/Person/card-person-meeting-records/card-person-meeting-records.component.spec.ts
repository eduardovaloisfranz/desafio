import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonMeetingRecordsComponent } from './card-person-meeting-records.component';

describe('CardPersonMeetingRecordsComponent', () => {
  let component: CardPersonMeetingRecordsComponent;
  let fixture: ComponentFixture<CardPersonMeetingRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonMeetingRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPersonMeetingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

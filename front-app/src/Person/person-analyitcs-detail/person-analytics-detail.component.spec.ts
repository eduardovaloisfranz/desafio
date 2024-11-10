import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAnalyticsDetailComponent } from './person-analytics-detail.component';

describe('PersonAnalyitcsDetailComponent', () => {
  let component: PersonAnalyticsDetailComponent;
  let fixture: ComponentFixture<PersonAnalyticsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAnalyticsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonAnalyticsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

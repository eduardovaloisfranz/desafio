import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAnalyitcsDetailComponent } from './person-analyitcs-detail.component';

describe('PersonAnalyitcsDetailComponent', () => {
  let component: PersonAnalyitcsDetailComponent;
  let fixture: ComponentFixture<PersonAnalyitcsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAnalyitcsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonAnalyitcsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

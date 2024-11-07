import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAnalyctsDetailComponent } from './person-analytcs-detail.component';

describe('PersonAnalyitcsDetailComponent', () => {
  let component: PersonAnalyctsDetailComponent;
  let fixture: ComponentFixture<PersonAnalyctsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAnalyctsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonAnalyctsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

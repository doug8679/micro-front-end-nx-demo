import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyNetReportComponent } from './safety-net-report.component';

describe('SafetyNetReportComponent', () => {
  let component: SafetyNetReportComponent;
  let fixture: ComponentFixture<SafetyNetReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyNetReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyNetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

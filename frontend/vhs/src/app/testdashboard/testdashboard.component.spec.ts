import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdashboardComponent } from './testdashboard.component';

describe('TestdashboardComponent', () => {
  let component: TestdashboardComponent;
  let fixture: ComponentFixture<TestdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

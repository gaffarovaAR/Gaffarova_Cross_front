import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmentsPageComponent } from './add-assignments-page.component';

describe('AddMissionPageComponent', () => {
  let component: AddAssignmentsPageComponent;
  let fixture: ComponentFixture<AddAssignmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssignmentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

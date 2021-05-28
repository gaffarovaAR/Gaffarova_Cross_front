import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignmentsPageComponent } from './edit-assignments-page.component';

describe('EditMissionPageComponent', () => {
  let component: EditAssignmentsPageComponent;
  let fixture: ComponentFixture<EditAssignmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssignmentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssignmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

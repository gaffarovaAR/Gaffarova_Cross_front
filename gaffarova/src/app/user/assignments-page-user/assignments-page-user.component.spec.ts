import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsPageUserComponent } from './assignments-page-user.component';

describe('MissionsPageComponent', () => {
  let component: AssignmentsPageUserComponent;
  let fixture: ComponentFixture<AssignmentsPageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsPageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

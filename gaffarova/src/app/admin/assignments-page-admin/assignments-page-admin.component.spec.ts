import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsPageAdminComponent } from './assignments-page-admin.component';

describe('MissionsPageComponent', () => {
  let component: AssignmentsPageAdminComponent;
  let fixture: ComponentFixture<AssignmentsPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsPageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

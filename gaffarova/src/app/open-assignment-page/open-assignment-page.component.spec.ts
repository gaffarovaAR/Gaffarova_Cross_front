import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAssignmentPageComponent } from './open-assignment-page.component';

describe('OpenMissionPageComponent', () => {
  let component: OpenAssignmentPageComponent;
  let fixture: ComponentFixture<OpenAssignmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAssignmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAssignmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

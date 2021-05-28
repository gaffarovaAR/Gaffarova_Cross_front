import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorsPageAdminComponent } from './executors-page-admin.component';

describe('EmployersPageComponent', () => {
  let component: ExecutorsPageAdminComponent;
  let fixture: ComponentFixture<ExecutorsPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutorsPageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutorsPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorsPageUserComponent } from './executors-page-user.component';

describe('EmployersPageComponent', () => {
  let component: ExecutorsPageUserComponent;
  let fixture: ComponentFixture<ExecutorsPageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutorsPageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutorsPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

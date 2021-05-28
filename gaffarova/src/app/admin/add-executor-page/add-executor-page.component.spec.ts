import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExecutorPageComponent } from './add-executor-page.component';

describe('AddEmployerPageComponent', () => {
  let component: AddExecutorPageComponent;
  let fixture: ComponentFixture<AddExecutorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExecutorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExecutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

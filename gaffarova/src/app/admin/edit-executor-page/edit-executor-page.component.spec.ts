import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExecutorPageComponent } from './edit-executor-page.component';

describe('EditEmployerPageComponent', () => {
  let component: EditExecutorPageComponent;
  let fixture: ComponentFixture<EditExecutorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExecutorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExecutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

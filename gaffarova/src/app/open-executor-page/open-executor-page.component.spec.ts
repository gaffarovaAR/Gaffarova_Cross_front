import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenExecutorPageComponent } from './open-executor-page.component';

describe('OpenEmployerPageComponent', () => {
  let component: OpenExecutorPageComponent;
  let fixture: ComponentFixture<OpenExecutorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenExecutorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenExecutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

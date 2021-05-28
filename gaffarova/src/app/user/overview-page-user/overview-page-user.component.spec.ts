import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPageUserComponent } from './overview-page-user.component';

describe('OverviewPageComponent', () => {
  let component: OverviewPageUserComponent;
  let fixture: ComponentFixture<OverviewPageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewPageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

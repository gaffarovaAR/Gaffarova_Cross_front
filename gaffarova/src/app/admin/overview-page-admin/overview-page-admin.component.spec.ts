import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPageAdminComponent } from './overview-page-admin.component';

describe('OverviewPageComponent', () => {
  let component: OverviewPageAdminComponent;
  let fixture: ComponentFixture<OverviewPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewPageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

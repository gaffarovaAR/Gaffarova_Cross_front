import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutAdminComponent } from './site-layout-admin.component';

describe('SiteLayoutComponent', () => {
  let component: SiteLayoutAdminComponent;
  let fixture: ComponentFixture<SiteLayoutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLayoutAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

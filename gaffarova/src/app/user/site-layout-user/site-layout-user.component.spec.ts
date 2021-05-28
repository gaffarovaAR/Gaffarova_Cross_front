import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutUserComponent } from './site-layout-user.component';

describe('SiteLayoutComponent', () => {
  let component: SiteLayoutUserComponent;
  let fixture: ComponentFixture<SiteLayoutUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLayoutUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

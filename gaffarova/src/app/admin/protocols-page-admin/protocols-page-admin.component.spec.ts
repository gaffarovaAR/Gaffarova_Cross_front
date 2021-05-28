import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsPageAdminComponent } from './protocols-page-admin.component';

describe('ProtocolsPageComponent', () => {
  let component: ProtocolsPageAdminComponent;
  let fixture: ComponentFixture<ProtocolsPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolsPageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolsPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

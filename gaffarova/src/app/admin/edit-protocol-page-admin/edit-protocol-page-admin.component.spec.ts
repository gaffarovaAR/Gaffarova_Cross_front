import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProtocolPageAdminComponent } from './edit-protocol-page-admin.component';

describe('EditProtocolPageAdminComponent', () => {
  let component: EditProtocolPageAdminComponent;
  let fixture: ComponentFixture<EditProtocolPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProtocolPageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProtocolPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

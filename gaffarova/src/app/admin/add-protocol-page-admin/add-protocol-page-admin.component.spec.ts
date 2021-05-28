import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProtocolPageAdminComponent } from './add-protocol-page-admin.component';

describe('AddProtocolPageAdminComponent', () => {
  let component: AddProtocolPageAdminComponent;
  let fixture: ComponentFixture<AddProtocolPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProtocolPageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProtocolPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

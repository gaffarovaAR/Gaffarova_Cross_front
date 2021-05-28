import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsPageUserComponent } from './protocols-page-user.component';

describe('ProtocolsPageComponent', () => {
  let component: ProtocolsPageUserComponent;
  let fixture: ComponentFixture<ProtocolsPageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolsPageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolsPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProtocolPageComponent } from './open-protocol-page.component';

describe('OpenProtocolPageComponent', () => {
  let component: OpenProtocolPageComponent;
  let fixture: ComponentFixture<OpenProtocolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenProtocolPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenProtocolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

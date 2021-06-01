import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJuegoComponent } from './admin-juego.component';

describe('AdminJuegoComponent', () => {
  let component: AdminJuegoComponent;
  let fixture: ComponentFixture<AdminJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

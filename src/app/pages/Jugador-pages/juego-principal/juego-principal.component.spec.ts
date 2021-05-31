import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPrincipalComponent } from './juego-principal.component';

describe('JuegoPrincipalComponent', () => {
  let component: JuegoPrincipalComponent;
  let fixture: ComponentFixture<JuegoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

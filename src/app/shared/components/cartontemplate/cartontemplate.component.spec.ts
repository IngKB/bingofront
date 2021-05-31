import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartontemplateComponent } from './cartontemplate.component';

describe('CartontemplateComponent', () => {
  let component: CartontemplateComponent;
  let fixture: ComponentFixture<CartontemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartontemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartontemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

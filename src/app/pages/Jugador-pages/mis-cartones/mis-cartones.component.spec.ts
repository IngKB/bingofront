import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCartonesComponent } from './mis-cartones.component';

describe('MisCartonesComponent', () => {
  let component: MisCartonesComponent;
  let fixture: ComponentFixture<MisCartonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCartonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCartonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

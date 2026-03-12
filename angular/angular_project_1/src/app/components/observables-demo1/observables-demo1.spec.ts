import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesDemo1 } from './observables-demo1';

describe('ObservablesDemo1', () => {
  let component: ObservablesDemo1;
  let fixture: ComponentFixture<ObservablesDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesDemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

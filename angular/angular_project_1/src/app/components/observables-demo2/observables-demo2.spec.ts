import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesDemo2 } from './observables-demo2';

describe('ObservablesDemo2', () => {
  let component: ObservablesDemo2;
  let fixture: ComponentFixture<ObservablesDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesDemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

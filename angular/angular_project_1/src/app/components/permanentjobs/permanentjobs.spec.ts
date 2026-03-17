import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Permanentjobs } from './permanentjobs';

describe('Permanentjobs', () => {
  let component: Permanentjobs;
  let fixture: ComponentFixture<Permanentjobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Permanentjobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Permanentjobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

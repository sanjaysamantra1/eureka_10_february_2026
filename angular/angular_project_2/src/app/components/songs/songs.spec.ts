import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Songs } from './songs';

describe('Songs', () => {
  let component: Songs;
  let fixture: ComponentFixture<Songs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Songs],
    }).compileComponents();

    fixture = TestBed.createComponent(Songs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call processData with the correct data', () => {
    const processDataSpy = vi.spyOn(component, 'processData'); // Spy For processData function
    const result = component.fetchData();
    expect(processDataSpy).toHaveBeenCalled(); // Verify processData was called
    expect(processDataSpy).toHaveBeenCalledWith(['item1', 'item2', 'item3']); // Verify correct arguments
    expect(result).toBe(3); // Verify the return value
  });

  
});

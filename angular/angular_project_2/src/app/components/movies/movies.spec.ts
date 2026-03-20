import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movies } from './movies';

describe('Movies', () => {
  // Test Suite
  let component: Movies;
  let fixture: ComponentFixture<Movies>;

  beforeAll(() => {
    console.log('Before All...'); // 1 Time
  });
  beforeEach(async () => {
    // N Times
    console.log('Before Each...');
    await TestBed.configureTestingModule({
      imports: [Movies],
    }).compileComponents();

    fixture = TestBed.createComponent(Movies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  afterEach(() => {
    // N Times
    console.log('After Each...');
  });
  afterAll(() => {
    // 1 Time
    console.log('After All...');
  });

  it('should create', () => {
    // Test Case
    console.log('It-1');
    expect(component).toBeTruthy(); // Expectation
  });

  it('should verify add function', () => {
    console.log('It-2');
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(10, -20)).toBe(-10);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(-10, -20)).toBe(-30);
  });

  it('should verify sumOfDigits function', () => {
    console.log('It-3');
    expect(component.sumOfDigits(125)).toBe(8);
  });

  it('should verify addNewCar function', () => {
    console.log('It-4');
    expect(component.cars).toBeDefined();
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars.length).toBe(2);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Honda');
    expect(component.cars).not.toContain('Maruti');
    expect(component.cars).not.toContain('Audi');
    expect(component.cars).toEqual(['Tata', 'Honda']);
    component.addNewCar('Maruti');
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars.length).toBe(3);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Honda');
    expect(component.cars).toContain('Maruti');
    expect(component.cars).not.toContain('Audi');
    expect(component.cars).toEqual(['Tata', 'Honda', 'Maruti']);
  });
});

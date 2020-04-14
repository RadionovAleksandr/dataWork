import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTaskComponent } from './third-task.component';

describe('ThirdTaskComponent', () => {
  let component: ThirdTaskComponent;
  let fixture: ComponentFixture<ThirdTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create matrix[3,3] spiral bypass', () => {
    let n = component.n = 3;
    let m = component.m = 3;
    const centr = component.spiralMatrix(n, m)[1][1];
    expect(centr).toBe(9);
  });

  it('should create matrix[2,3] with 2 rows', () => {
    let n = component.n = 2;
    let m = component.m = 3;
    const rows = component.spiralMatrix(n, m)[0].length;
    expect(rows).toBe(3);
  });

  it('should create matrix[5,1] with 1 col', () => {
    let n = component.n = 5;
    let m = component.m = 1;
    const cols = component.spiralMatrix(n, m)[0].length;

    expect(cols).toBe(1);
  });

  it('should create matrix[0,1] with 1 col', () => {
    let n = component.n = 0;
    let m = component.m = 1;
    const cols = component.spiralMatrix(n, m);
    expect(cols).toBe(false);
  });

  
});

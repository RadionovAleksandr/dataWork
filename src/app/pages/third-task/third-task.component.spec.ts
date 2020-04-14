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
    component.n = 3;
    component.m = 3;
    const centr = component.spiralMatrix()[2][2];
    expect(centr).toBeTruthy(9);
  });

  it('should create matrix[2,3] with 2 rows', () => {
    component.n = 2;
    component.m = 3;
    const rows = component.spiralMatrix().length;
    expect(rows).toBeTruthy(2);
  });

  it('should create matrix[5,1] with 1 col', () => {
    component.n = 5;
    component.m = 1;
    const cols = component.spiralMatrix()[0].length;
    expect(cols).toBeTruthy(1);
  });
});

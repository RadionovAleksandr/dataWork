import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondTaskComponent } from './second-task.component';
import { By } from '@angular/platform-browser';

describe('SecondTaskComponent', () => {
  let component: SecondTaskComponent;
  let fixture: ComponentFixture<SecondTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render mounth new Date() after click', () => {
    let currentDate = new Date();
    component.date = currentDate;
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(component.month).toBe(currentDate.getMonth());
  });

  it('should render year new Date() after click', () => {
    let currentDate = new Date();
    component.date = currentDate;
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(component.year).toBe(currentDate.getFullYear());
  });

});

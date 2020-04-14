import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstTaskComponent } from './first-task.component';
import { BST } from './task';

describe('FirstTaskComponent', () => {
  let component: FirstTaskComponent;
  let fixture: ComponentFixture<FirstTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("add", function () {
    it("should Добавить 1 узел в дерево", function () {
      const result = new BST();
      result.add(1);
      result.add(2);
      const beforeadd = result.countNode();
      result.add(109);
      const afteradd = result.countNode();
      const countNode = afteradd - beforeadd;
      expect(countNode).toBe(1); //обойти все дерево и вернуть разницу циклов
    });

  });

  describe("walkWidth", function () {
    it("should вернуть итерацию на которой нашелся узел, обход в ширину", function () {
      const result = new BST();
      result.add(1);
      result.add(2);
      result.add(109);
      const countStep = result.walkWidth(109);
      expect(countStep).toBe(3); //Создать дерево дерево, передать значение узла для поиска, посчитать на каком шаге должен найтись узел
    });
  });

  describe("walkInDepth", function () {
    it("should вернуть итерацию на которой нашелся узел, обход в глубину", function () {
      const result = new BST();
      result.add(1);
      result.add(2);
      result.add(109);
      const countStep = result.walkInDepth(109);
      expect(countStep).toBe(3); //Создать дерево дерево, передать значение узла для поиска, посчитать на каком шаге должен найтись узел
    });
  });

  describe("walkWidth", function () {
    it("should вернуть false при поиске значения которогонет в узле , обход в ширину", function () {
      const result = new BST();
      result.add(1);
      result.add(2);
      result.add(109);
      const bool = result.walkWidth(5);
      expect(bool).toBe(false);
    });
  });

  describe("walkInDepth", function () {
    it("should вернуть false при поиске значения которогонет в узле , обход в глубину", function () {
      const result = new BST();
      result.add(1);
      result.add(2);
      result.add(109);
      const bool = result.walkInDepth(5);
      expect(bool).toBe(false);
    });
  });

  describe("add", function () {
    it("should вернуть true при добавлении узла в дерево ", function () {
      const result = new BST();
      result.add(1);
      result.add(2);
      result.add(109);
      const bool = result.add(5);
      expect(bool).toBe(true);
    });
  });

  describe("add", function () {
    it("should вернуть false при повторном добавлении узла в дерево", function () {
      const result = new BST();
      result.add(1);
      result.add(2);
      result.add(109);
      const bool = result.add(109);
      expect(bool).toBe(false); 
    });
  });
});

import { Component, Input, } from '@angular/core';
import { BST } from './task';
import "@angular/compiler";
@Component({
    selector: 'app-first-task',
    templateUrl: './first-task.component.html',
    styleUrls: ['./first-task.component.scss']
})
export class FirstTaskComponent {

    @Input() value: number;
    bst: BST;
    title = 'Написать две процедуры обхода дерева – в глубину и в ширину.';
    constructor() {
        this.bst = new BST();
        this.bst.add(14);
        this.bst.add(9);
        this.bst.add(12);
        this.bst.add(22);
        this.bst.add(17);
        this.bst.add(3);
        this.bst.add(-1);
        this.bst.add(25);
        // this.bst.walkWidth(25);
        // this.bst.walkWidth(10);
        // this.bst.walkInDepth(10);
        // this.bst.walkInDepth(3);
        this.bst.add(25);
    }

    addNode() {
        this.bst.add(this.value);
    }
    walkWidth() {
        this.bst.walkWidth(this.value);
    }

    walkInDepth() {
        this.bst.walkInDepth(this.value);
    }
}

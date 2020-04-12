import { Component, OnInit, Input } from '@angular/core';
// import { BtnComponent } from './btn/btn.component';

@Component({
    selector: 'app-first-task',
    templateUrl: './first-task.component.html',
    styleUrls: ['./first-task.component.scss']
})
export class FirstTaskComponent {

    @Input() value: number;
    title = 'Написать две процедуры обхода дерева – в глубину и в ширину.';
    // constructor(private btn: BtnComponent ) {

    // }

    // addNode(value) {
    //     this.btn.add(value);
    // }

    ngOnInit(): void {
    }

}

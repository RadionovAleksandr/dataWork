import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fourth-task',
    templateUrl: './fourth-task.component.html',
    styleUrls: ['./fourth-task.component.scss']
})
export class FourthTaskComponent {
    title = 'Проверить сбалансированность скобочной структуры в произвольном выражении.';
    value: string;
    constructor() { }

    balance(value) {
        if (value.trim()) {
            let brackets = {
                ')': '(',
                '}': '{',
                ']': '[',
                '>': '<',
            };

            let leftBracets = ['(', '{', '[', '<',];
            let rightBracets = [')', '}', ']', '>',];
            let stack = [];
            for (let i = 0; i < value.length; i++) {

                let item = value[i];
                // if (leftBracets.includes(item) === false && rightBracets.includes(item) === false) {  todo: check value includes bracets
                //     console.log('Для провоерки выражения на скобочную сбалансированность введите выражение содержащее скобки, например  ( { 1 + 3 } [ 4 + < 3 - 5 > ] )');
                //     return false;
                // }

                if (leftBracets.includes(item)) {
                    stack.push(item);
                }
                if (rightBracets.includes(item) && brackets[item] === stack[stack.length - 1]) {
                    stack.pop();
                }
            }

            if (stack.length === 0) {
                console.log(`Скобки сбалансирвоаны`);
                return true;
            } else {
                console.log(`Скобки не сбалансирвоаны`);
                console.log(`закройте скобки`);
                stack.forEach(element => {
                    console.log(element);
                });
                return false;
            }
        } else {
            console.log('введите непустое значение');
        }
    };
}

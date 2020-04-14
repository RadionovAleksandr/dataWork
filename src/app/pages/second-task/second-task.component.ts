import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-second-task',
    templateUrl: './second-task.component.html',
    styleUrls: ['./second-task.component.scss']
})
export class SecondTaskComponent implements OnInit {
    title = 'Нарисовать календарь для месяца, в котором находится заданная дата.';
    monthNames = [
        "Январь", "Февараль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
    ];
    year: number;
    month: number;
    tableCalendar = [];
    date: Date = new Date();
    constructor() { }

    setMonth(date) {
        console.log(date);
        if (date) {
            this.month = new Date(date).getMonth();
            this.year = new Date(date).getFullYear();
            this.tableCalendar = [];
            let current: any = new Date(this.year, this.month);
            let next: any = new Date(this.year, (this.month + 1));
            let diff: number = (next - current) / (1000 * 3600 * 24);
            let index: number = (current.getDay() + 6) % 7;
            const ROWS: number = (index + diff) / 7;
            const COLS = 7;

            let tr = [];
            let day = 1 - index;
            for (let i = 0; i < ROWS; i++) {
                tr = [];
                for (let j = 0; j < COLS; j++) {
                    day > 0 && day <= diff ? tr.push(day) : tr.push(" ");
                    day++;
                }
                this.tableCalendar.push(tr);
            }
        }
    }

    ngOnInit(): void {
        this.setMonth(this.date);
    }
}

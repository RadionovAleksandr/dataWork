import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-third-task',
    templateUrl: './third-task.component.html',
    styleUrls: ['./third-task.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ThirdTaskComponent implements OnInit {
    title = 'Заполнить 2-мерный массив размером N * M числами 1, 2, 3, 4, …, N * M с обходом по спирали к центру.';
    n: number;
    m: number;
    constructor() { }

    spiralMatrix(n, m) {
        if ((n || m) && n !== 0 && m !== 0) {
            let x = 0, y = 0;
            const matrix = [];
            for (let j = 0; j < n; j++) matrix[j] = new Array(m); // Создаем матрицу

            let rows = m, cols = n;
            let cicle = 0;
            for (let i = 1; i <= n * m; i++) {
                let xSteps = cols, ySteps = rows;
                if (m - y === rows + cicle && n - x === cols + cicle) {  //движение вниз y=min x=min
                    ySteps = rows;
                    for (let k = 0; k < rows; k++, i++) {
                        matrix[x][y] = i;
                        ySteps--;
                        if (ySteps !== 0) {
                            y++;
                        } else {
                            cols--;
                            x++;
                        }
                    }
                }

                if (y + 1 === rows + cicle && n - x === cols + cicle) {  //движение вправо, y=max x=min
                    xSteps = cols;
                    for (let k = 0; k < cols; k++, i++) {
                        matrix[x][y] = i;
                        xSteps--;
                        if (xSteps !== 0) {
                            x++;
                        } else {
                            rows--;
                            y--;
                        }
                    }
                }

                if (y + 1 === rows + cicle && x === cols + cicle) {  //движение вверх, y=max x=max
                    ySteps = rows;
                    for (let k = 0; k < rows; k++, i++) {
                        matrix[x][y] = i;
                        ySteps--;
                        if (ySteps !== 0) {
                            y--;
                        } else {
                            cols--;
                            x--;
                        }
                    }
                    console.log(matrix);
                }
                if (m - y - 1 === rows + cicle && x === cols + cicle) {  //движение влево, y=min x=max
                    xSteps = cols;
                    for (let k = 0; k < cols; k++, i++) {
                        matrix[x][y] = i;
                        xSteps--;
                        if (xSteps !== 0) {
                            x--;
                        } else {
                            rows--;
                            y++;
                        }
                    }
                }

                cicle++; // счетчик обхода
                i--;
            }
            console.log(matrix);
            return matrix;
        } else {
            alert('введите ненулевые значения');
            return false;
        }
    }

    matrixView(matrix) {
        if (matrix) {
            let rows = '';
            for (let i = 0; i < matrix.length; i++) {
                let cells = '';
                for (let j = 0; j < matrix[i].length; j++) {
                    cells += '<div class="block_cell">' + matrix[i][j] + '</div>';
                }
                rows += '<div class="block_row">' + cells + '</div>';
            }
            document.querySelector('.calendar-wrap').insertAdjacentHTML('beforeend', '<div class="block">' + rows + '</div>');
        }
    }
    ngOnInit() {

    }
}

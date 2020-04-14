class BSTNode {
    value;
    left;
    right;

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export class BST {
    root;
    constructor() {
        this.root = null;
    }

    viewTrie() {
        console.log(this.root);
        return this.root;
    }

    // renderTree() {   todo: render tree
    //     debugger;
    //     let turn = [];
    //     let table = [];
    //     let row = 0;
    //     let currentRoot = this.root;
    //     table.push([]);
    //     table[row].push(currentRoot);
    //     turn.push(currentRoot);

    //     while (turn.length === 0) {
    //         row++;
    //         table.push([]);
    //         currentRoot = turn[0];
    //         turn = turn.filter(node => node !== currentRoot);
    //         if (currentRoot.left) {
    //             turn.push(currentRoot.left);
    //             table[row].push(currentRoot.left);
    //         }
    //         if (currentRoot.right) {
    //             turn.push(currentRoot.right);
    //             table[row].push(currentRoot.right);
    //         }
    //     };
    //     console.log(table);
    //     return table;
    // }

    add(value) {
        if (!value) {
            console.log(`Неверный формат ${value}, введите число`);
            return false;
        }
        const node = this.root;
        if (this.root === null) { // если вершина не обьявлена
            this.root = new BSTNode(value); // записываем вершину текущее значенире
            return true;
        } else { // если вершина объявлена
            return this.searchNode(node, value);
        }
    }

    searchNode(node, value) {
        if (value === node.value) {
            console.log(`Попытка повторно создать узел \nЗначение: ${value} существует в дереве`);
            return false;
        }
        if (value < node.value) {
            if (node.left) {
                return this.searchNode(node.left, value);
            } else {
                console.log(` Значение: ${value} присвоено в левый узел узла ${node.value}`);
                node.left = new BSTNode(value);
                return true;
            }
        } else {
            if (node.right) {
                return this.searchNode(node.right, value);
            } else {
                console.log(` Значение: ${value} присвоено в правый узел узл ${node.value}`);
                node.right = new BSTNode(value);
                return true;
            }
        }
    }

    walkWidth(value) {
        let step = 0;
        let turn = [];
        let currentRoot = this.root;
        turn.push(currentRoot); // Поместить в очередь вершину дерева
        while (currentRoot.value !== value) {
            step++;
            if (turn.length === 0) {
                console.log(`Количество итераций ${step}`);
                console.log('данного значения нет в узлах дерева');
                return false;
            };
            currentRoot = turn[0];
            turn = turn.filter(node => node !== currentRoot); //Изъять из очереди очередную вершину. Поместить в очередь ее дочерние вершины 
            currentRoot.left ? turn.push(currentRoot.left) : null;
            currentRoot.right ? turn.push(currentRoot.right) : null;
        }
        console.log(`Мне понадобилось ${step} итераций чтобы найти значение ${value} в обходя дерево в глубину`);
        return step;
    }

    walkInDepth(value) {
        let step = 1;
        let currentRoot = this.root;
        while (currentRoot.value !== value) {
            step++;
            if (value < currentRoot.value) {
                if (currentRoot.left === null) {
                    currentRoot = null;
                    console.log(`Количество итераций ${step}`);
                    console.log('данного значения нет в узлах дерева');
                    return false;
                } else {
                    currentRoot = currentRoot.left;
                }
            }
            if (value > currentRoot.value) {
                if (currentRoot.right === null) {
                    currentRoot = null;
                    console.log('данного значения нет в узлах дерева');
                    return step;
                } else {
                    currentRoot = currentRoot.right;
                }
            }
        }
        console.log(`Мне понадобилось ${step} итераций чтобы найти значение ${value} в обходя дерево в глубину`);
        return step;
    }

    countNode() {
        let step = 0;
        let turn = [];
        let currentRoot = this.root;
        turn.push(currentRoot); // Поместить в очередь вершину дерева
        while (turn.length !== 0) {
            step++;
            currentRoot = turn[0];
            turn = turn.filter(node => node !== currentRoot); //Изъять из очереди очередную вершину. Поместить в очередь ее дочерние вершины 
            currentRoot.left ? turn.push(currentRoot.left) : null;
            currentRoot.right ? turn.push(currentRoot.right) : null;
        }
        console.log(`В дереве ${step} узлов`);
        return step;
    }
}
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

class BST {
    root;
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = this.root;
        if (this.root === null) { // если вершина не обьявлена
            this.root = new BSTNode(value); // записываем вершину текущее значенире
            return;
        } else { // если вершина объявлена                             
            return this.searchNode(node, value);
        }
    }

    searchNode(node, value) {
        if (value < node.value) {
            return node.left ?
                this.searchNode(node.left, value) :
                (node.left = new BSTNode(value));
        } else {
            return node.right ?
                this.searchNode(node.right, value) :
                (node.right = new BSTNode(value));
        }
    }

    walkWidth(value) {
        let step = 0;
        let turn = [];
        let currentRoot = this.root;
        while (currentRoot.value !== value) {
            step++;
            turn.push(currentRoot); // Поместить в очередь корень дерева
            currentRoot = turn[0];
            turn = turn.filter(node => node !== currentRoot); //Изъять из очереди очередную вершину. Поместить в очередь ее дочерние вершины 
            currentRoot.left ? turn.push(currentRoot.left) : null;
            currentRoot.right ? turn.push(currentRoot.right) : null;
        }
        console.log(step)
        return true
    }


    walkInDepth(value) {
        let step = 0;
        let currentRoot = this.root;
        while (currentRoot.value !== value) {
            step++;
            if (value < currentRoot.value) {
                if (currentRoot.left === null) {
                    return false;
                } else {
                    currentRoot = currentRoot.left;
                }
            }
            if (value > currentRoot.value) {
                if (currentRoot.right === null) {
                    return false;
                } else {
                    currentRoot = currentRoot.right;
                }
            }
        }
        console.log(step);
        return true;
    }
}

const bst = new BST();

bst.add(14);
bst.add(9);
bst.add(12);
bst.add(22);
bst.add(17);
bst.add(3);
bst.add(-1);
bst.add(25);
bst.walkWidth(3);
bst.walkInDepth(3);

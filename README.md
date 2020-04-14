# DataWorkTasks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

first task
class BSTNode - the binary node of the tree is initialized "new BSTNode(value)", has the form of constructor:
    constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
}
no methods

class BST binary tree is initialized "new BST()", has the form of constructor: 
constructor() {
    this.root = null;
}

methods: add(value: number): <null> || <searchNode(node, value)>
// Takes a number as an argument, checks for the root of the tree, if root === null, sets the current value to the vertex
 // If there is a vertex, the searchNode (node, value) method appears
 //searchNode(node: BSTNode, value: number): node.right || node.left = new BSTNode(value)
// node - root of the tree
// look for a suitable place for the new node until
instance creates the class new BSTNode(value) as first child
 // from existing note
 //walkWidth(value: number)<true> 
// traverses the tree in width by comparing the values of the nodes with value, if the values match, it finishes the search by returning true
 // Queue the root of the tree 
// Get the next vertex from the queue. Queue its child vertices in order from left to right (from right to left) // If the queue is empty, then the end of the traversal, it repeats the removal of the node and placing the child vertices in the queue in different way
 //walkInDepth(value: number)<true> 
// traverses the tree in depth by comparing the values of nodes with value, if the values match, finishes the search by returning true
 // Visit the root
// Bypass the left subtree.
// Bypass the right subtree



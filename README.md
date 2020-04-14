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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## DOCUMENTATION

## first task
class BSTNode - the binary node of the tree, has the form of constructor:
    constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
}
no methods

class BST binary tree, has the form of constructor: 
constructor() {
    this.root = null;
}

methods: add(value: number): <searchNode(node, value)>
 Takes a number as an argument, checks for the root of the tree, if root === null, sets the current value to the vertex
If there is a vertex, the searchNode (node, value) method appears
 
 searchNode(node: BSTNode, value: number): node.right || node.left = new BSTNode(value)
 node - root of the tree
 look for a suitable place for the new node until
instance creates the class new BSTNode(value) as first child
from existing note
 
 walkWidth(value: number)<true> || <false>
 traverses the tree in width by comparing the values of the nodes with value, if the values match, it finishes the search by returning true, if not finded, returning false.
  Queue the root of the tree 
 Get the next vertex from the queue. Queue its child vertices in order from left to right
  If the queue is empty, then the end of the traversal, it repeats the removal of the node and placing the child vertices in the queue in different way

 walkInDepth(value: number)<true> 
 traverses the tree in depth by comparing the values of nodes with value, if the values match, finishes the search by returning true, if not finded, returning false.
  Visit the root
 Bypass the left subtree.
 Bypass the right subtree

## Second task
class SecondTaskComponent has variables:
title: string;
year: number;
month: number;
tableCalendar: [[number]];
date: Date;

metod: setMonth(date: Date) <[[number]]> || <false> (invalid attribut).
Generates the values ​​of days for presentation in the calendar
<[[number]]> view:		
[
    [        1	2	3	4	5  ]
    [6	7	8	9	10	11	12 ]
    [13	14	15	16	17	18	19 ]
    [20	21	22	23	24	25	26 ]
    [27	28	29	30	           ]
]

## Third task
class ThirdTaskComponent имеет переменные:
title: string;
n: number;
m: number;

metod: spiralMatrix(n: number, m: number) <[[number]]> || <false> (invalid attribut).
<[[number]]> view:		
[
    [ 1	 2	3 ]
    [ 8	 9	4 ]
    [ 7	 6	5 ]
]

metod: matrixView([[number]]) <HTMLelement> 
visualizes the transferred values ​​in a table.

## foudth task
class FourthTaskComponent has variables:
title: string;
value: string;

metod: balance(value: string) <true> bracket structure balanced || <false>  bracket structure disbalanced
uses a stack structure to perform a brace analysis

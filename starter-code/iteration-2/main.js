"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo(myArray) {
        this.myArray = myArray;
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("\n    =========== NEW TASK ===========\n    Task " + task + " inserted in the list\n    ");
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myArray.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        if (index != -1) {
            this.myArray.splice(index, 1);
        }
        return this.myArray.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();

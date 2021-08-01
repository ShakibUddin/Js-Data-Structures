let LinkedList = require("./linked-list");

let myList = new LinkedList();

myList.push(10);
myList.push(20);
myList.push(30);

console.log(`List size: ${myList.size}`);
console.log(`head value: ${myList.first().value}`);
console.log(`tail value: ${myList.last().value}`);

console.log("Poping...");

myList.pop();

console.log(`List size: ${myList.size}`);
console.log(`head value: ${myList.first().value}`);
console.log(`tail value: ${myList.last().value}`);
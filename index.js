let LinkedList = require("./singly-linked-list");

//Singly Linked List

let myList = new LinkedList();

myList.push(10);
myList.push(20);
myList.push(30);

console.log(`List size: ${myList.size}`);
console.log(`head value: ${myList.first().value}`);
console.log(`tail value: ${myList.last().value}`);

console.log("Poping...");

myList.pop();
myList.pop();
myList.pop();

console.log(`List size: ${myList.size}`);
console.log(`head value: ${myList.first()}`);
console.log(`tail value: ${myList.last()}`);

myList.push(40);
myList.push(50);
myList.push(60);

console.log(`List size: ${myList.size}`);
console.log(`head value: ${myList.first().value}`);
console.log(`tail value: ${myList.last().value}`);

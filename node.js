const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(age, highlight, nextnode) {
    this.age = age;
    this.highlight = this.highlight;
    this.nextnode;
  }
}
// const node7 = new Node(7 , "i turned seven")
// const node3 = new Node(3 , "i started walking " , node7)
// const node1 = new Node(1,"i was born",node3)

class LinkedList {
  constructor(age, highlight) {
    this.head = new Node(age, highlight);
  }
  InsertBegining = (age, highlight) => {
    const node = new Node(age, highlight, this.head);
    this.head = node;
  };

  getLinkList = () => {
    let current = this.head;
    while (current) {
      console.log(`age : ${current.age}, highlight : ${current.highlight} `);
      current = current.nextnode;
    }
  };

  insertsHighlight = (age) => {
    let current = this.head;
    while (current.age < age) {
      let currentAge = current.age + 1;
      if (current.nextnode && current.nextnode.age === currentAge) {
        current = current.nextnode;
      } else {
        let highlight = prompt(`enter highlight for year : ${currentAge}`);
        let newNode = new Node(currentAge, highlight, current.nextnode);
        current.nextnode = newNode;
        current = newNode;
      }
    }
  };
}

const ageList = new LinkedList(7, "i was seven"); // head = 7
ageList.InsertBegining(3, "i started walking"); // head = 3 => 7
ageList.InsertBegining(1, "i was born"); // head = 1 => 3 => 7

let age = prompt("age : ");
ageList.insertsHighlight(age);
ageList.InsertBegining();
console.log(ageList);

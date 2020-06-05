// Test Command:
// npm test ./test/LinkedListConstructionTest.js

const program = require('./LinkedListConstruction');
const chai = require('chai');

class TestNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const Node = program.Node || TestNode;

function getNodeValuesHeadToTail(linkedList) {
  const values = [];
  let node = linkedList.head;
  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

function getNodeValuesTailToHead(linkedList) {
  const values = [];
  let node = linkedList.tail;
  while (node !== null) {
    values.push(node.value);
    node = node.prev;
  }
  return values;
}

function bindNodes(nodeOne, nodeTwo) {
  nodeOne.next = nodeTwo;
  nodeTwo.prev = nodeOne;
}

it('Test Case #1', function () {
  const linkedList = new program.DoublyLinkedList();
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const three2 = new Node(3);
  const three3 = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  bindNodes(one, two);
  bindNodes(two, three);
  bindNodes(three, four);
  bindNodes(four, five);
  linkedList.head = one;
  linkedList.tail = five;

  linkedList.setHead(four);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 3, 5]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([5, 3, 2, 1, 4]);

  linkedList.setTail(six);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 3, 5, 6]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 5, 3, 2, 1, 4]);

  linkedList.insertBefore(six, three);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 5, 3, 6]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 3, 5, 2, 1, 4]);

  linkedList.insertAfter(six, three2);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 5, 3, 6, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 6, 3, 5, 2, 1, 4]);

  linkedList.insertAtPosition(1, three3);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([3, 4, 1, 2, 5, 3, 6, 3]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 6, 3, 5, 2, 1, 4, 3]);

  linkedList.removeNodesWithValue(3);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 5, 6]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 5, 2, 1, 4]);

  linkedList.remove(two);
  chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 5, 6]);
  chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 5, 1, 4]);

  chai.expect(linkedList.containsNodeWithValue(5)).to.deep.equal(true);
});

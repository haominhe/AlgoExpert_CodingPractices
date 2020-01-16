/*
Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from
leftmost branch sum to rightmost branch sum). A branch sum is the sum of all values in a Binary
Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends
at any leaf node. Each Binary Tree node has a value stored in a property called "value" and two
children nodes stored in properties called "left" and "right," respectively. Children nodes can either
be Binary Tree nodes themselves or the None (null) value.

Sample input:
      1
    /   \
    2   3
   / \   / \
   4 5   6  7
   /\ \
   8 9 10

Sample output: [15, 16, 18, 10, 11]

Method 2
O(n) time
O(n) space
*/
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Method 1
  // var tree = [];
  // traverse(tree, 0, [root.value], root.left, root.right);

  // const output = []
  // tree.forEach((branch) => {
  //   const sum = branch.reduce((acc, curr) => acc + curr, 0);
  //   output.push(sum);
  // })
  // return output;

  // Method 2
  const sums = [];
  calculateBrachSum(root, 0, sums);
  return sums;
}

// Method 1
function traverse(tree, index, branch, left, right) {
  if (left && right) {
    const newBranch = JSON.parse(JSON.stringify(branch));
    branch.push(left.value);
    traverse(tree, index, branch, left.left, left.right);
    newBranch.push(right.value);
    tree.push(newBranch)
    traverse(tree, index + 1, newBranch, right.left, right.right);
  } else if (left && !right) {
    branch.push(left.value);
    traverse(tree, index, branch, left.left, left.right);
  } else if (!left && right) {
    branch.push(right.value);
    traverse(tree, index, branch, right.left, right.right);
  } else if (index === 0) {
    tree.splice(index, 0, branch);
  }
}

// Method 2
function calculateBrachSum(node, runningSum, sums) {
  if (!node) {
    return;
  }
  runningSum = runningSum + node.value;

  if (!node.left && !node.right) {
    sums.push(runningSum);
    return;
  }

  calculateBrachSum(node.left, runningSum, sums);
  calculateBrachSum(node.right, runningSum, sums);
}

exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;


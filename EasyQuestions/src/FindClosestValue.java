/*
Author: Haomin He Cao
Find Closest Value In BST

Input: 
Each BST node has an integer value and 2 children nodes 'left' and 'right', they are either BST nodes or null.
BST property: left <= value <= right.
You have a target integer value.
Write a function that finds the closest value to that target value contained in the BST. (only 1 closest value)

Return: Boolean
Example: 10,          12
      5       15
    2   5    13  22
  1           14 

Sample output: 13

Average: 
Space = O(1)
Time = O(log(n))

Worst:
Space = O(1)
Time = O(n)
*/

class FindClosestValue {
  public static int FindClosestValueInBST(BST tree, int target) {
    return FindClosestValueInBSTHelper(tree, target, Double.MAX_VALUE);
  }

  public static int FindClosestValueInBSTHelper(BST tree, int target, double closestValue){
    BST currentValue = tree;
    while(currentValue != null) {
      // update closest value to the target
      if(Math.abs(target - closestValue) > Math.abs(target - currentValue.value)){
        
        closestValue = currentValue.value;
        // System.out.println(closestValue);
      }
      if(target < currentValue.value){
        currentValue = currentValue.left;
      }
      else if (target > currentValue.value){
        currentValue = currentValue.right;
      }
      // if target == to currentValue.value, find the closest value is itself, break the loop
      else {
        break;
      }
    } // while

    // System.out.println((int)closestValue);
    return (int) closestValue;
  }

  // Binary Search Tree
  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
    }
  } // BST



  
  public static TestBST test;
  // Testing see if algorithm works properly 
  static int tested1 = -1;
  static int tested2 = -1;
  static int tested3 = -1;
  static int tested4 = -1;
  static int tested5 = -1;
  static int tested6 = -1;
  static int tested7 = -1;
  static int tested8 = -1;
  static int tested9 = -1;
  static int tested10 = -1;
  static int tested11 = -1;

  // Creating the testing BST 
  public static void ProgramTest() {
    test = new TestBST(100);
    test.insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(1).insert(1).insert(3).insert(1).insert(1)
        .insert(502).insert(55000).insert(204).insert(205).insert(207).insert(206).insert(208).insert(203).insert(-51)
        .insert(-403).insert(1001).insert(57).insert(60).insert(4500);

  }

  // small class inside a class, must use static  
  static class TestBST extends BST {
    public TestBST(int value) {
      super(value);
    }

    public TestBST insert(int value) {
      BST current = null;
      if (value < this.value) {
        if (this.left == null) {
          BST newBST = new BST(value);
          this.left = newBST;
          return this;
        } else {
          current = this.left;
        }
      } else {
        if (right == null) {
          BST newBST = new BST(value);
          this.right = newBST;
          return this;
        } else {
          current = this.right;
        }
      }
      while (true) {
        if (value < current.value) {
          if (current.left == null) {
            BST newBST = new BST(value);
            current.left = newBST;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right == null) {
            BST newBST = new BST(value);
            current.right = newBST;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  } // TestBST

  public static void main(String[] args) throws Exception {
    System.out.println("*** This program finds the closest value to target value contained in the BST.");

    ProgramTest();
    // test case 1
    tested1 = FindClosestValueInBST(test, 100);
    System.out.println("Test case 1 - find the closest value in BST correctly (target: 100, closest: 100): " + (100 == tested1));

    // test case 2
    tested2 = FindClosestValueInBST(test, 208);
    System.out.println("Test case 2 - find the closest value in BST correctly (target: 208, closest: 208): " + (208 == tested2));
    
    // test case 3
    tested3 = FindClosestValueInBST(test, 4500);
    System.out.println("Test case 3 - find the closest value in BST correctly (target: 4500, closest:4500 ): " + (4500 == tested3));

    // test case 4
    tested4 = FindClosestValueInBST(test, 4501);
    System.out.println("Test case 4 - find the closest value in BST correctly (target: 4501, closest: 4500): " + (4500 == tested4));

    // test case 5
    tested5 = FindClosestValueInBST(test, -70);
    System.out.println("Test case 5 - find the closest value in BST correctly (target: -70, closest: -51): " + (-51 == tested5));

    // test case 6
    tested6 = FindClosestValueInBST(test, 2000);
    System.out.println("Test case 6 - find the closest value in BST correctly (target: 2000, closest: 1001): " + (1001 == tested6));

    // test case 7
    tested7 = FindClosestValueInBST(test, 6);
    System.out.println("Test case 7 - find the closest value in BST correctly (target: 6, closest: 5): " + (5 == tested7));

    // test case 8
    tested8 = FindClosestValueInBST(test, 30000);
    System.out.println("Test case 8 - find the closest value in BST correctly (target: 30000, closest: 55000): " + (55000 == tested8));

    // test case 9
    tested9 = FindClosestValueInBST(test, -1);
    System.out.println("Test case 9 - find the closest value in BST correctly (target: -1, closest: 1): " + (1 == tested9));

    // test case 10
    tested10 = FindClosestValueInBST(test, 29751);
    System.out.println("Test case 10 - find the closest value in BST correctly (target: 29751, closest: 55000): " + (55000 == tested10));

    // test case 11
    tested11 = FindClosestValueInBST(test, 29749);
    System.out.println("Test case 11 - find the closest value in BST correctly (target: 29749, closest: 4500): " + (4500 == tested11));
    

  } // main
} // FindClosestValueInBST

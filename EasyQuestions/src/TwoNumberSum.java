/*
Author: Haomin He Cao
Two Number Sum

Input: non-empty array of distinct integers
       a target sum
Return: any two numbers sum up to the target sum, return them in an sorted array
Example: [3,5,-4,8,11,1,-1,6],10
         [-1,11]

Space = O(1)
Time = O(n log n)
*/


import java.util.Arrays;

class TwoNumberSum {
    public static int[] twoNumberSum(int[] array, int targetSum) {

      Arrays.sort(array);
      int leftPointer = 0;
      int rightPointer = array.length - 1;
      int sum = 0;
      int[] testedArray; // declaring array

      while (leftPointer < rightPointer) {
        sum = array[leftPointer] + array[rightPointer];
        if (sum == targetSum) {
          testedArray = new int[] {array[leftPointer], array[rightPointer]};
          return testedArray;
        } else if (sum < targetSum){
          leftPointer++;
        } else if (sum > targetSum){
          rightPointer--;
        }
      }
      testedArray = new int[] {};
      return testedArray;
    }



    public static void main(String[] args) throws Exception {
      System.out.println("*** This program returns an array that contains two numbers sum up to the target sum.");

      // test case 1
      int[] expected = {4, 6};
      int[] tested = twoNumberSum(new int[] {4, 6}, 10);
      System.out.println("Test case 1 - is expected array equals to tested array: " + Arrays.equals(expected, tested)); 
      // test case 2
      int[] expected1 = {1, 4};
      int[] tested1 = twoNumberSum(new int[] {4, 6, 1}, 5);
      System.out.println("Test case 2 - is expected array equals to tested array: " + Arrays.equals(expected1, tested1)); 
      // test case 3
      int[] expected2 = {-3, 6};
      int[] tested2 = twoNumberSum(new int[] {4, 6, 1, -3}, 3);
      System.out.println("Test case 3 - is expected array equals to tested array: " + Arrays.equals(expected2, tested2)); 
      // test case 4
      int[] expected3 = {-1, 11};
      int[] tested3 = twoNumberSum(new int[] {3, 5, -4, 8, 11, 1, -1, 6}, 10);
      System.out.println("Test case 4 - is expected array equals to tested array: " + Arrays.equals(expected3, tested3)); 
      // test case 5
      int[] expected4 = {8, 9};
      int[] tested4 = twoNumberSum(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9}, 17);
      System.out.println("Test case 5 - is expected array equals to tested array: " + Arrays.equals(expected4, tested4)); 
      // test case 6
      int[] expected5 = {3, 15};
      int[] tested5 = twoNumberSum(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 15}, 18);
      System.out.println("Test case 6 - is expected array equals to tested array: " + Arrays.equals(expected5, tested5)); 
      // test case 7
      int[] expected6 = {-5, 0};
      int[] tested6 = twoNumberSum(new int[] {-7, -5, -3, -1, 0, 1, 3, 5, 7}, -5);
      System.out.println("Test case 7 - is expected array equals to tested array: " + Arrays.equals(expected6, tested6));
      // test case 8
      int[] expected7 = {-47, 210};
      int[] tested7 = twoNumberSum(new int[] {-21, 301, 12, 4, 65, 56, 210, 356, 9, -47}, 163);
      System.out.println("Test case 8 - is expected array equals to tested array: " + Arrays.equals(expected7, tested7));
      // test case 9
      int[] expected8 = {};
      int[] tested8 = twoNumberSum(new int[] {-21, 301, 12, 4, 65, 56, 210, 356, 9, -47}, 164);
      System.out.println("Test case 9 - is expected array equals to tested array: " + Arrays.equals(expected8, tested8));
      // test case 10
      int[] expected9 = {};
      int[] tested9 = twoNumberSum(new int[] {3, 5, -4, 8, 11, 1, -1, 6}, 15);
      System.out.println("Test case 10 - is expected array equals to tested array: " + Arrays.equals(expected9, tested9));

    } //main
  } //TwoNumberSum

  



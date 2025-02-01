/* question 1
Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray
(a contiguous sequence of elements) whose sum equals a specified value target. 
You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. 
You need to find the first subarray whose sum is equal to the target.
Note: If no such array is possible then, return [-1]. 
*/
const array = [1, 2, 3, 6, 5];
const target = 16;
let newArray = [];
let sum = 0;

//function to return the 1-based indices of the leftmost and rightmost elements of a continous subarray whose sum equals a specified value target
function getSubArraySumEqualToTarget(array, value ) {
    //check if target value is less than the array elements
    for (const element of array) {
        if (value < element) 
            return -1; 
    }
   

    //check if the first sets of values in the array sum is equal to target
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        sum += array[i];
        if (sum === value) {
            return SumEqualToValue();
        } 
    } 
    
    //  check if first sets of values in the array is not equal to target
    if (sum !== value) {
        array.shift()
        newArray = [];
        sum = 0;
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i]);
            
            sum += array[i];
            
            if (sum === value) {
                return SumEqualToValue(); 
            } 

        } 

        
    }
}
console.log(getSubArraySumEqualToTarget(array, target));


function SumEqualToValue() {
    return [newArray[0], newArray[newArray.length - 1]]; 
}

function sumNotEqualToValue() {
    array.shift()
    newArray = [];
    sum = 0;
}




/* question 2
You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive).
This array represents a permutation of the integers from 1 to n with one element missing. 
Your task is to identify and return the missing element.
example 
Input: arr[] = [1, 2, 3, 5]
Output: 4
Explanation: All the numbers from 1 to 5 are present except 4.*/
//array size n- 1
//Function to get total number in array
const sumOfArray = (arr) => {
    return arr.reduce((sum, arr) => {
        const Total = sum + arr;
        return Total;  
    }, 0);    
}

//function to get sum of n
function sumTo(n){
    let sum = 0;
    for( let i = 1; i <= n; i++) {
        sum += i;  
    }
    return sum;
}

//function to find the missing number
function toFindMissingNumber() {
    const NTotal = sumTo(5);
    const ArrayTotal = sumOfArray([1, 2, 3, 5]);
    return NTotal - ArrayTotal;
}
console.log('MissingNumber', toFindMissingNumber());

//Question 3
/*
Given an integer array arr[]. You need to find the maximum sum of a subarray */

//Question 4
/*Given an array of positive integers arr[], return the second largest element from the array.
 If the second largest element doesn't exist then return -1.
Note: The second largest element should not be equal to the largest element.
Examples:
Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34. */
const GetSecondLargestNumber = (array) => {
    let maxNumber = 0;
    let secondMaxNumber = 0;
    for (const number of array) {
        if(number > maxNumber) {
            maxNumber = number; //get max number
        }
        if (number > secondMaxNumber && number < maxNumber) { //use max number to get second max number
            secondMaxNumber = number;
        }
    }
    if (secondMaxNumber === 0){
        return -1; //return -1 if secondMax number is not found
    }
    return secondMaxNumber;
}
console.log("secondMaxNumber", GetSecondLargestNumber([10, 5, 10]));

//Question5
/*
You are given an array arr[] of non-negative numbers. 
Each number tells you the maximum number of steps you can jump forward from that position. 
For example:
If arr[i] = 3, you can jump 1 step, 2 steps, or 3 steps forward from position i.
If arr[i] = 0, you cannot jump forward from that position.
Your task is to find the minimum number of jumps needed to move from the first position in the array to the last position.
Note:  Return -1 if you can't reach the end of the array.
Examples : 

Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
Output: 3 
Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9,
and from here we will jump to the last. 
*/

//Question6
/* 
You are given an array arr of positive integers. Your task is to find all the leaders in the array. 
An element is considered a leader if it is greater than or equal to all elements to its right. 
The rightmost element is always a leader
Examples:
Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.*/

const arr = [16, 17, 4, 3, 5, 2];
const getLeadersInArray = (arr) => {
    let maxNumber = arr[0];
    let leader = [];
    for (const element of arr) {
        console.log(element);
        console.log(element > maxNumber);
        if (maxNumber > element) {
            maxNumber = element;
            break;
        }
        leader.push(maxNumber);
        console.log(leader);
        
        
    }

}
getLeadersInArray(arr)


//Question7
/*
Given an array arr of integers, find all the elements that occur more than once in the array. 
If no element repeats, return an empty array.
Examples:
Input: arr[] = [2, 3, 1, 2, 3]
Output: [2, 3] 
Explanation: 2 and 3 occur more than once in the given array. */ 

//Question 8
/*Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
You need to solve this problem without utilizing the built-in sort function. 
Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.*/


const sortInAscendingOrder = (arr) => {
const newArray = [];
    for (const element of arr) {
        if (element === 0) 
            newArray.push(element);
    }
    for (const element of arr) {
        if (element === 1) 
            newArray.push(element);
    }
    for (const element of arr) {
        if (element === 2) 
            newArray.push(element);
    }
        
    return newArray;
    
}
console.log("AscendingOrder",sortInAscendingOrder([0, 1, 2, 0, 1, 2]));








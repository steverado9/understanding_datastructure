//Question 1
/*
Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', 
verify the validity of the arrangement.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
Input: s = "[{()}]"
Output: true
Explanation: All the brackets are well-formed. */

const string = "[{()}]";
function isParenthesisBalanced(string) {
    return !string.split('').reduce((previous, arr) => {
        if("[" || "{" || "(") {
            previous++;
        }
        if("]" || "}" || ")") {
            previous--;
        }
        return previous;
    }, 0);
}
console.log("Balanced Parenthesis", isParenthesisBalanced(string)); //incorrect

//Question 2
/*You are given a string s, and your task is to reverse the string.
Input: s = "Geeks"
Output: "skeeG" */
const word = "Geeks";
const newWord = console.log("Reverse string", word.split('').reverse().join(''));

//Question 3
/*Given two strings s1 and s2 consisting of lowercase characters. 
The task is to check whether two given strings are an anagram of each other or not.
An anagram of a string is another string that contains the same characters, 
only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. 
Strings s1 and s2 can only contain lowercase alphabets.
Input: s1 = "geeks", s2 = "kseeg"
Output: true
Explanation: Both the string have same characters with same frequency. So, they are anagrams. */
const s1 = "geeks";
const s2 = "kseeg";

let s1Transform = console.log(s1.split('').sort());
let s2Transform = console.log(s2.split('').sort());
console.log("anagrams", s1Transform === s2Transform);

//Question4
/*You are given a string s. Your task is to determine if the string is a palindrome.
A string is considered a palindrome if it reads the same forwards and backwards. 
Input: s = "abba"
Output: true
Explanation: "abba" reads the same forwards and backwards, so it is a palindrome.*/
const s = "abba";
console.log( s);

const reversedS = console.log( s.split('').reverse().join(''));
console.log('palindrome', s === reversedS); //why

//Question 5
/*Given a string s, reverse the string without reversing its individual words. Words are separated by spaces.

Note: The string may contain leading or trailing spaces, or multiple spaces between two words. 
The returned string should only have a single space separating the words, and no extra spaces should be included.

Input: s = " i like this program very much "
Output: "much very program this like i"
Explanation: After removing extra spaces and reversing the whole string (not individual words),
 the input string becomes "much very program this like i". */ 

const input = " i like this program very much ";
const output = input.trim().split(' ').reverse().join(' ');
console.log('Trim and Reverse', output);






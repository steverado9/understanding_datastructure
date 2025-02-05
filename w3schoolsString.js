//Examples of string
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

//Quotes inside string
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

//Template Strings
const answer4 = `This is also a string`;


//The backslash escape character (\) turns special characters into string characters:
let escapeCharacter = "We are the so-called \"Vikings\" from the north.";

//JavaScript Strings as Objects
let y = new String('john')

//String Methods
//1) string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

//Extracting String Characters
//2)charAt()
console.log(text.charAt(5));

//3)charCodeAt()
console.log(text.charCodeAt(0));

//4)at()
console.log(text.at(2));

//5)slice()
console.log(text.slice(0, 26));
console.log(text.slice(0));

//6)subString()
console.log(text.substring(0));

//7)substr()
console.log(text.substr(0,4));

//8)toUpperCase()
let text1 = "Hello";
console.log(text1.toUpperCase());

//9)toLowerCase()
console.log(text1.toLowerCase());

//10)concat()
let text2 = "World";
console.log(text1.concat('', text2));

//11) trim()
let text3 = "      Hello World!      ";
console.log(text3.trim());

//12)trimStart()
console.log(text3.trimStart());

//13) padStart()

//14)repeat()
console.log(text1.repeat(3));

//15) replace()
let text4 = "Please visit Microsoft!";
console.log(text4.replace('Microsoft', "google"));

//16) indexOf()
let text5 = "Please locate where 'locate' occurs!";
console.log(text5.indexOf('locate'));

//17)lastIndexOf()
console.log(text5.lastIndexOf('locate'));

//18)search()
console.log(text5.search('locate'));

//19)match()
let text6 = "The rain in SPAIN stays mainly in the plain";
console.log(text6.match("ain"));

console.log(text6.match(/ain/));

//performs a global search
console.log(text6.match(/ain/g));

//Perform a global, case-insensitive search for "ain":
console.log(text6.match(/ain/gi));

//20)includes()
let text7 = "Hello world, welcome to the universe.";
console.log(text7.includes("world"));

//Check if a string includes "world". Start at position 12:
console.log(text7.includes("world", 12));

//21)startsWith()





















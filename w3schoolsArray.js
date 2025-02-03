//Creating array
//1)Using array literals
const array = ['stephen', 'isaac', 'joseph'];

//create an array and provide the details
let myArray = [];
myArray[0] = 'awom';
myArray[1] = 'chinonso';
myArray[2] = 'christabel';
console.log(myArray);

//2) Using the javascript keyword new
const cars = new Array('benz', 'bmw', 'volkswagen', 'toyota');
console.log(cars);

cars[0] = 'chevrolet'; //changed the first elemnet in an array
console.log(cars);

//Array method
//1) To know if a variable is an array
console.log(Array.isArray(cars));

//1) toString()
console.log(cars.toString());
console.log(typeof cars);
//2)length proprty
console.log(cars.length);
//3) at()
console.log(cars.at(2));
//4)join()
console.log(cars.join('*'));
//5) concat()
console.log(myArray.concat(cars));
//6)copyWithin()
console.log();
//7)flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat()
console.log(newArr);
//8)flatMap()
const numbers = [1, 2, 3, 4, 5,6];
const newNumbers = numbers.map(x => [x, x * 2])
console.log(newNumbers);
//9)splice(para1, para2)
//para1 = position to add from
//para2 = number of elements to delete
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Tangarin");
console.log(fruits);
//10)
//toSplice(para1, para2)
const items = ["orange, Banana, mango"];
console.log(items);
console.log(items.toSpliced(0, 0, "Tangarin", "pawpaw"));
//11)splice(para)
const brand = ['nikes', 'addidas', 'highfashion', 'goCrazy'];
console.log(brand.slice(1));
console.log(brand.slice(1, brand.length));

//Array Search Method
//12) indexOf()
const position = brand.indexOf('addidas');
console.log(position, );
//13)lastIndexOf() 
console.log(brand.lastIndexOf('addidas'));
//14)includes()
console.log(brand.includes('addidas'));
//15)find()
const value = numbers.find((number) => {
    return number > 2
})
console.log(value);
//16)findIndex()
const result = numbers.findIndex((number) => {
    return number > 2
})
console.log(result);
//17)findLast()
const lastElement = numbers.findLast((number) => {
    return number > 2
})
console.log(lastElement);
//18) findLastIndex()
const lastElementIndex = numbers.findLastIndex((number) => {
    return number > 2
})
console.log(lastElementIndex);

//ArraySortMethod
//19)sort()
console.log(brand.sort());
//20) reverse()
console.log(brand.reverse());
//21)toSorted()
const sort = brand.toSorted()
console.log(sort);
//22)toReversed() 
const reverse = items.toReversed()
console.log(reverse);

//23)Numeric Sort
//In ascending order
//get Max and Min number after sorting
const points = [40, 100, 1, 5, 25, 10];
const sortNumbers = points.sort((a, b) => {
    return a - b;
})
console.log(sortNumbers);
const maxNumber = sortNumbers[points.length - 1];
const minNumber = sortNumbers[0];
console.log(maxNumber);
console.log(minNumber);
//indecending order
//get max and min number after sorting
const sortNumbersDecending = points.sort((a, b) =>  b - a);
console.log(sortNumbersDecending);

console.log(points[7]);











































//Map Methods
//1)The new Map() method
//You can create a Map by passing an Array to the new Map() constructor

const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);
let numb = fruits.get('apples');
console.log(numb);


//2)The set() Method
//You can add elements to a Map with the set() method:
const colors = new Map();

colors.set('blue', 30);
colors.set('red', 50);
colors.set('green', 37);

//using set the change the value of a Map element
colors.set('blue', 900)

let number = colors.get('blue')
console.log(number);

//3)The get() Method
//The get() method gets the value of a key in a Map
fruits.get('bananas')

//4)Map.size
//The size property returns the number of elements in a map
console.log(colors.size);

//5)Map.delete()
colors.delete('blue');
console.log(colors);

//6)Map.clear()
colors.clear()
console.log(colors);

//7)Map.has()
console.log(fruits.has('bananas'));

//8)Map.forEach()
//List all the entries
fruits.forEach((value, key) => {
    console.log(`${key} = ${value}`);
})

//9)Map.entries()
for (const element of fruits.entries()) {
    console.log(element);
}

//10)Map.keys()
for (const element of fruits.keys()) {
    console.log(element);
}

//11)Map.values()
//You can use the values() method to sum the values in a map
let total = 0;
for (const element of fruits.values()) {
    console.log(total += element);
}

//12)Being able to use objects as keys is an important Map feature.
//create object
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'oranges'};

//create a Map
const items = new Map();

//Add the Objects to the Map
items.set(apples, 500);
items.set(bananas, 300);
items.set(oranges, 200);

console.log(items);
console.log(items.get(apples));

//13)JavaScript Map.groupBy()
//create an array
const fruitsList = [
    {name: 'apples', quantity: 300},
    {name: 'bananas', quantity: 500},
    {name: 'oranges', quantity: 200},
    {name: 'kiwi', quantity: 150},
];

//callback function to select low volumes
function myCallback({quantity}) {
    return quantity > 200? "ok" : "low";
}

//Group by ok and low
const result = Map.groupBy(fruitsList, myCallback);

//Display Results 
for (let element of result.get('ok')) {
   console.log( "This fruits are ok" + element.name + element.quantity);
}

for (let element of result.get('low')) {
   console.log( "This fruits are low " + element.name + element.quantity);
}

console.log(result.get('ok'));











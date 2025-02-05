//Create a set
const letters = new Set();
console.log(letters);

//add values
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);


//Set Methods
//1) The new Set()
const phones = new Set(['a', 'b', 'c']);
console.log(`This set has ${phones.size} values`);

//2)Create a Set and add variables:
const alphabets = new Set();

const a = 'a';
const b = 'b';
const c = 'c';
const d = 'c';
const e = 'c';
const f = 'c';

alphabets.add(a);
alphabets.add(b);
alphabets.add(c);
alphabets.add(d);
alphabets.add(e);
alphabets.add(f);

console.log(alphabets);

//3)listing the elements of a set
for (const element of alphabets) {
    console.log(element); 
}

//4)The has() method
console.log(alphabets.has('d'));

//5)forEach()
alphabets.forEach(value => console.log(value));

//6) The values() method
//Example one
//create a set
const colors = new Set(['red', 'blue', 'green']);
console.log(colors);


//create an iterator
const myIterator = colors.values();
console.log(myIterator);


//List all Elements
for (const element of myIterator) {
    console.log(element);
}

//Example two
// create a set
const numbers = new Set([1, 2, 4, 5, 8]);

//List all the elements
for (const element of numbers.values()) {
    console.log(element);  
}

//7) The key() method
for (const i of numbers.keys()) {
    console.log(i);
}

//8)The entries() Method
for (const entry of numbers.entries()) {
    console.log(entry);
}

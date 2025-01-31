//map1 contains 
// 1 => 2
// 2 => 3
// 4 => 5

const map1 = new Map([
    [1, 2],
    [2, 3],
    [4, 5]
]);

console.log(map1);

//map2 contains
//firstname => submit
//lastname => ghosh
//website => geeksforgeeks 
const map2 = new Map([
    ["firstname", "sumit"],
    ["lastname", "ghosh"],
    ["website", "geeksforgeeks"]
])
console.log(map2);

//map3 contains 
//whole number => [1, 2, 3, 4]
//Decimal number => [1.1, 1.2, 1.3, 1.4]
//Negative number => [-1, -2, -3, -4]
const map3 = new Map([
    ["whole numbers", [1, 2, 3, 4]],
    ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
    ["negative numbers", [-1, -2, -3, -4]],
]);
console.log(map3);

//map4 contains
//storing arrays both as key and value
//'first name', 'last name' => 'submit', 'ghosh'
//'friend 1', 'sourav' => 'friend 2', 'gourav'
const map4 = new Map([
    [
        ["first name", "last name"],
        ["submit", "ghosh"]
    ],
    [
        ["friend 1", "friend 2"],
        ["sourav", "gourav"]
    ]
])
console.log(map4);



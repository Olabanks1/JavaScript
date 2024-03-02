console.log("BANKOLE CHILDREN");
const object = [
    {
        name : "Racheal" ,
        age : "30",
        "fav Food" : "Fried Spag",
        motto : "I willing to give Anythihng even if it my last Card"
    },
    {
        name : "Matthew" ,
        age : "27",
        "fav Food" : 'Jollof Rice "Semo and Vegetables"',
        motto : "It all gonna be alright"
    },
    {
        name : "Oladipupo" ,
        age : "17",
        "fav Food" : 'Fried rice',
        motto : "I'll be great no matter what it takes!!! \ All abt Goodness"
    }
]

console.log(object[0].name);
console.log(object[0].age);
console.log(object[0]["fav Food"]);
console.log(object[0].motto);
console.log(object[1].name);
console.log(object[1].age);
console.log(object[1]["fav Food"]);
console.log(object[1].motto);
console.log(object[2].name);
console.log(object[2].age);
console.log(object[2]["fav Food"]);
console.log(object[2].motto);

function num(arr, item){
    arr.push(item)
    return arr.shift();
}
let array = [1,2,3,4,5]
console.log(`Before: ${array}`)
console.log(num(array , 6 ))
console.log(`After: ${array}`)

let number = [1,2,3,4,5]
console.log(number.pop());

const littleArray = "ola";
for (let i = 0 ; i < littleArray.length ; i++ ){
    console.log(littleArray[i])
};
let i = 0; 
while ( i < littleArray.length){
    console.log(littleArray[i]);
    i++;
}
for ( let bby of littleArray){
    console.log(bby) 
}
let semiObject = object[1].name;
console.log(semiObject);
let regex = /[tew]/ig;
const check = semiObject.match(regex)
console.log(check)
let a = 20
function ola(bank){
    switch (bank){
        case 1 :
        case 2 :
        return "You selected one OR two"
        case 3 :
        return "You selected three"
        default :
        return "You selected NaN"
    }
}
console.log(ola())
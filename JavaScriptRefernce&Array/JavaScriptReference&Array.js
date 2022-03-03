// So original string/boolena will not change
let age = 100
let newAge = age
age = 200
console.log(newAge)

let isWorking = true;
let isWorking2 = isWorking
isWorking = false

console.log(isWorking2)


// but in array orignal array will change
let a = ['Apple','Banana','Orange','Papaya']
let b = a

a[2] = 'Mango'
console.log(b)

// we can solve this by
let fruits = ['Apple','Banana','Orange','Papaya']
let c = [...fruits]
fruits[1] = 'mango'
console.log(c)
// OR
let cen = Array.from(c)  
// OR
let newA = fruits.slice()  // it will return same array but new copy

//Object

let newObj = {
    a: 1,
    b: 3,
    c: 4
}
let newObj2 = newObj
newObj.a = 12
console.log(newObj2)
// can solve 
const cap2 = Object.assign({}, newObj, {b:22})  // it works only for one lever if there is embeded object key then it will now
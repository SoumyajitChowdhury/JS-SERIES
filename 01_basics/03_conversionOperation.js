let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));
let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//33 -->number
//"33" -->number
//"33abc" -->NaN
//null -->0
//undefined ==>NaN
//true=>1  false==>0


let isLoggedIn = "soumya"
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);
//for any  number without 0 its always give true i..e bool
//"" ---> false
//"Soumya" -->true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


//**********************Operations*************************/

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello "
let str2 = "Soumya"
// console.log(str1.concat(str2));


// console.log(1+"2")//12
// console.log("1"+2)//12
// console.log("1"+"2")//12
// console.log("1"+2+2)//122
// console.log(1+2+"2")//32

console.log(+true);     //1
let myDate = new Date();
// console.log(myDate.toString());//Thu Sep 14 2023 08:25:50 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Thu Sep 14 2023
// console.log(myDate.toISOString());//2023-09-14T08:25:50.085Z
// console.log(myDate.toJSON());//2023-09-14T08:25:50.085Z
// console.log(myDate.toLocaleString());//9/14/2023, 8:25:50 AM
// console.log(myDate.toLocaleDateString());//9/14/2023

// const createdDate = new Date(2023,0,15);//months are 0 based
// console.log(createdDate.toDateString());//Sun Jan 15 2023
const createdDate = new Date("02-08-2023");
// console.log(createdDate.toLocaleString());
let myTimeStamps = Date.now()
// console.log(myTimeStamps);
// console.log(createdDate.getTime());

//------how convert from milisecond to seconds---
// console.log(Math.floor(Date.now()/1000));
//--------------------------------------------
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
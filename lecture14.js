//For in Loop 
//advance loop in javascript
/*
let obj={
    name:"rohan", //key : value
    age:"23",
    gender:"male",
    city:"jaipur",
}
for(let key in obj)
{
    //console.log(key,obj[key]);
    //console.log(obj)
    //console.log(Object.keys(obj));
  
    console.log(key, obj[key]);

}
let obj2 = Object.create(obj);
obj2.money = 420; //object2 me keys ko inherit krega always
obj2.id = "Roh";
//console.log(obj2);
console.log(Object.keys(obj2));
for(let key in obj2){  //it iterates itself and inherite itself also,
    console.log(key);
}
*/
//new file me

/*let obj = {};
obj.name = "rohit";
//writable , enumerable, configurable
console.log(obj)
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
*/

/*let obj = {};
Object.defineProperties(obj, {
    name: {
        value: "rohit",
        writable: false, // if we apply true= value change , false= value not change
        enumerable: true,
        configurable: true,
    }
});
obj.name="mohit";

console.log(obj); // Output: { name: 'rohit' }
*/


/*
let obj = {};
Object.defineProperties(obj, {
    name: {
        value: "rohit",
        writable: false, // if we apply true= value change , false= value not change
        enumerable: true,
        configurable: true,
    }
});

Object.defineProperty(obj, "name", {
    writable : true, // it makes changes here
})
obj.name = "mohit";
console.log(obj);
*/
/*
const obj1 = {
    name:"rohit",
    age:23,
    account_number:30001 //only inherit this
};
Object.defineProperty(obj1,'account_number',{
    writable:false
}) 
obj1.account_number=20001; //if writable is true so it can be inherit 20001 also
console.log(obj1.account_number);
*/


//last code
const customer = {
    name:"rohit",
    age:23,
    account_number: 1200,
    balance: 2000,
}
Object.defineProperty(customer, "age",{ //deine property me jo bhi dalge vo true false pe based hoga
    enumerable:false,
})
for(let key in customer)
    console.log(key);
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));


//Object.defineProperty(Object.prototype, 'tostring', {
  //  enumerable:true,

//FOR IN LOOP
/*
const array = [10,20,40,12,30];
for(let key in array){
    console.log(key);
}

//array in object
const arr = [10,20,40,12,30];
arr.name = "Rohit";
arr.age = 20;  //aray sb key values ko print kr deta galle
for(let key in arr){
    console.log(key);
}
    */

const arr = [10,20,40,12,30];
arr.name="Rohit";
arr.age=20;
for(let index=0; index<arr.length; index++)
    console.log(index, arr[index]);

let user = {
    name:"rohit",
    age:30,
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));

//getOwnPropertyDescriptor = ye value ki description btati h for eg. value, writable, readable, enumerable in 3no ke bare me bhi
//lets start the code

const Array = [10,20,11,18,13];
for(let value of Array){
    console.log(value);
}
let str = "Rohit is Good boy";
for(let value of str) // it devides the string , seperate it into words
{
    console.log(value);
}

//coding life
const obj={
    name:"chavvi",
    age:22,
    gender:"female",
};
//for(let value of obj){
    //console.log(value); //it gives error because object iterable nhi hota h

    for (let index in Object.keys(obj)) {
    let key = Object.keys(obj)[index];
    console.log(key, obj[key]);                /*for(let value in Object.keys(obj)){
                                                     console.log(value, obj(value));*/
}
//for in = object
//for of = string, array

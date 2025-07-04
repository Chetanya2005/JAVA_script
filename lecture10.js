// how to create a object

//key : value
const obj = {
    name:"rohut",
    account_balance:420,
    gender:"other",
    age:30
}

//const arr = ['rohut',420,"Male",30];
console.log(obj);
console.log(obj["account_balance"]);
console.log(obj["account_number"]);

/*instagram user
const instagram={
    instagram_ID : "rohit_negi7",
    password : "bhaiyaji_9"
}
console.log(instagram);*/

/*const obj={
    0:20 , 1:50,
    console.log(obj['0']);
    console.log(obj['1']);
}*/

//array = object
//classes
/*class RailwayForm{
    submit(){
        alert("form submitted")
    }
    cancel(){
        alert("This form is cancelled")
    }
}

let harry = new RailwayForm()
let rohan = new RailwayForm()

harry.submit()
roshan.submit()
roshan.cancel()*/

//JAVASCRIPT    

// singleton : jab hum literals ki trh declare krte h to singleton nhi bnta h
// object literals 
        //object.create = ese bhi object ko dikhaya jata h
    const mySym = Symbol("Key1")
    const JsUser = {
               name: "Hitesh",
               age : 18,
               [mySym] : "mykey1", // wrong syntax mySym : "mykey1", agr symbol ki trh use krna ho toh my symbol lege
               location : "jaipur",
               email : "chetanya2205@gmail.com",
               isLoggedIn : false,
               lastLoginDays : ["Monday", "Sunday"]        
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) // string because of string name JsUser.mySym

JsUser.email = "chetanyaGPT@gamail.com"
//Object.freeze(JsUser);
JsUser.email = "chetanyamicrosoft@gmail.com"
//Object.freeze(JsUser);
console.log(JsUser);

//greating krni ho to kya kr skti hu
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // ✅ will evaluate this.name
// role of this will be next video
}
// Call the functions
JsUser.greeting();      // Output: Hello JS user
JsUser.greetingTwo();   // Output: Hello JS user, Chetanya

//values ko excess krne ke liye . use krte h but {[]} ye bhi use kiya jata h aglle galle

//PART 2 javascript
// object in javascript

/*const tinderUser = new Object()

console.log(tinderUser); //singleton object*/

const tinderUser ={ }

tinderUser.id = "123abc"
tinderUser.name = "Sanny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularuser = {
    Email : "gallechalle@gmail.com",
    fullname : {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname); //here we use ? also

//combining objects

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "c", 4: "d"}
const obj4 = {5 : "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2) //obj.assign me {} empty liya jata h taki or bhi values aaske
//console.log(obj3);

//object assign mdn = type in chrome
const obj3 = {...obj1, ...obj2, ...obj4} //... spread operator
//console.log(obj3);
//Object.assign(targeted , source)

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        name: "chini",
        address: 3455,
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

//in console = console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// part 3 ko objects ohhh
//what is APIs
// tree structing of object ({ }) => {}

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);
//console.log(course.price);

/*const navbar = ({company}) => {

}

navbar(company ="chetanya")*/

//APIs = apna kam kisi or k sir pr dalna, eg menu card, google verification.
// api nothinng but backend work

// JSON
{
    //this is json
}

/*{
    name : "chetanya",
    coursename : "js in hindi",
    price : "free"
}*/

[
    {},
    {},
    {},
]

//JSON = javascript object notation




// functions in javascript
//what is functions baby , i am telling you
/*console.log("H");
console.log("i"); // me inhe boht bar likhna chahta hu to kya kruga
console.log("J");
console.log("C");*/

function sayMyName(){
    console.log("H");
    console.log("i"); // me inhe boht bar likhna chahta hu to kya kruga
    console.log("J");
    console.log("C");

}
//sayMyName()

/*function addTwoNumbers(number1, number2){  //Here parameters
    console.log(number1 + number2);
}*/
//addTwoNumbers(3, null) // (function arguments)

/*function addTwoNumbers(number1, number2){

        //let result = number1 + number2
        //console.log("Hitesh");
        return result
}
const result = addTwoNumbers(3, 5)
console.log("RESULT: ",result);*/

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());



function loginUserMessage(username = "sam"){    // ye code chatgpt s smjhugi
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))
/*

function calculateCartPrice(...num1){           //... = this is rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))
*/

function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

/*const user = {
    username : "hitesh",
    price : 999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    //handleObject({ username: "chetanya", price: 1500 });

}
handleObject(user)
handleObject({ username: "chetanya", price: 1500 });
handleObject({ username: "tanya", price: 500 });*/


const user = {
    username : "hitesh",
    price : 999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    handleObject({
        username : "ajay",
        price : "Infinity"
    })
}

const mynewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue)
console.log(returnSecondValue([200,400,500,600]))

//scope in javascript


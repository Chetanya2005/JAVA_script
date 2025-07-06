// if else
/*let age = 30;
// vote eligible above 18
if(age>=18)
{
    console.log("Eligible for vote");
}
else
{
    console.log("not eligible for vote");
}*/

//if else if else
let age = 45;
if(age<18)
{
    console.log("KID");

}
else if(age>18)
{
    console.log("OLD");
}
else 
{
    console.log("YOUNG");
}

//multiple conditions : switch

//switch(new Date().getDay()) // ye aaj ka day btaega yr okey!!
//let day = "5";  //=== // apn yha string ki form me de rhe h to vo print nhi ho baby

switch(2)
{
    case 0: //let day = 0 it is too different
    console.log("SUNDAY");
    break;
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("tuesday");
    break;
    case 3:
    console.log("wednesday");
    break;
    case 4:
    console.log("thursday");
    break
    case 5:
    console.log("friday");
    break
    case 6:
    console.log("saturday");
    break;
    default:
    console.log("Not a Valid day");
}

// for loop = ek hi kam ko bar bar krta h yr
 /*for(i=0; i<20; i++){
    console.log("Hello Coder Army")
 }*/

 let i = 2; // i ko 20 tk check krege
 for(let i=0; i<20; i++)
 {
    console.log("Hello coder army")
 }

 let sum = 0;
 for(let i = 1; i <= 10; i++)
 {
    sum+=i;
 }
 console.log(sum);

 // var
 for(var j=0; j<5; j++){ // let sirf loop ke andr valid hota h galle
    console.log(j);
 }
 console.log(j);

 //let understand const and let
 let amount = 20;
 if(true){
    let amount = 30;
    console.log(amount);
 }

 greet()
 function greet(){
    console.log("hello geet");
 }
 //greet() = it is also valid here. // this is fun declaration, it may be declare upper or lower
 

    const meet = function(){
        console.log("hello meet");
    }
    meet() // this is function expresseion

    //while loop
    let k = 1;
    while(k<6)
    {
        console.log(k);
        k++;
    }

    //code
    let arr = [10, 20, 30];

for (let z = 0; z < arr.length; z++) {
    console.log(arr[z]);
}


    

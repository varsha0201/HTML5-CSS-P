// var div3 = document.getElementById('div-3');
// div3.addEventListener('dblclick', function(){
//     alert('div-3 has double clicked!!')
// });

function log(message){
    var messagediv = document.getElementById('message');
    messagediv.innerHTML = messagediv.innerHTML + message + '</br>';
}
// log('Hello')
// log('World')

// var x =1; //number
// log(x)

// var x = 1.25;
// log(x)

// log(typeof x);

// var gretting = "Hello good morning";
// log(gretting);
// log(typeof gretting);
// log(gretting.length);

// var flag = false; //boolean
// var flag1 = true;

// log(flag)
// log(flag1)

// // global variable
// var x = 1;
// log(x);

// function foo(){
//     var y =2;   //local variable
//     log("within foo, x is "+ x);
//     log("within foo, y is " + y);
//     if(true){
//         var z=3;
//         log('within foo if block, z is'+z);
//     }
//     log('outside foo if block, z is'+ z);
// }
// foo();
// log('outside foo, y is' + y);

// conditions

// var temp = '100';
// if(temp < 98.6){
//     log('fever');
// }else{
//     log('normal');
// }

// for(var i=1; i<=10; i++){
//     log(i);
// }

// var fruits = ['apple', 'orange', 'banana'];

// var str = "<ul>";
// for(i=0; i < fruits.length; i++){
//     str = str + "<li>" + fruits[i] + "</li>";
// }
// str = str + "</ul>";
// log(str);

// function foo(msg){
//     log('foo is the function');
// }

// var result = foo();
// log(result)

// // function declaration syntax
// function sum(a, b){
//     return a+b;
// }
// result = sum(10,20)
// log(result)

// // function rxpression syntax
// function sum(){
//     for(var i=0, result=0; i< arguments.length; i++){
//         result = result + arguments[i];

//     }
//     return result;
// }
// log(sum(1,2,3,4));

// //object literal syntax
// var person={
//     "name":"Sakshi",
//     "grade":8,
//     "isworking": false,
//     emailIds:['sakshi@gmail.com', 'sakshi@yahoo.com'],
//     address:{
//         firstline:"202 Kaveri niliya",
//         lastname:"zip:560043"
//     },
//     doesPersonWork: function(){
//         return this.isworking;
//     }

// };
// console.log(person);
// console.log(person.name);
// person["grade"]

// //modified property
// person.grade = 9;
// console.log(person.grade)

// console.log(person.isworking)

// var d = new Date(); // represnt current date
// log(d)

// log(d.getDate());
// log(d.getFullYear());

// var newdate=d.getDate() +1;
// d.setDate(newdate);

// log(d)

// // number
// var price = 1.35455;
// log(price.toFixed(2))

// log(price.toPrecision(4));

document.getElementById('btnCalc').addEventListener('click',
function(){
    var qt = document.getElementById('quantity');
    var qtVal = parseFloat(qt.value);
    var price = 22.23;
    var netAmount = price * qtVal;
    document.getElementById('final-amount').innerHTML = netAmount;
});

/* string
replace
substring vs substr
*/


var superheroQuote = "with great power comes great responsibility";
log(superheroQuote);
log(superheroQuote.replace('responsibility', 'electricity bill'));
var sub = superheroQuote.substring(5, 16);
log(sub)

result = Math.random();
log(result);

function genrateRandom(a,b){
    return a+(b-a)*Math.random();

}

log(genrateRandom(100, 200));

log(Math.max(3,8,10,-6,8,-89,45));

var arr =[3,8,10,-6,-8,-12,8,18];
log("Output of Math.max.apply:" + Math.max.apply(null, arr));
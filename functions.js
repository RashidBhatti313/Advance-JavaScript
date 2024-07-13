
///////////// Heigher order AND callback functions \\\\\\\\\\\\\

// jo function apne parameter me callback functoin call kar raha ho wo call back functions 
// 

// function abc(a) {
//     return a
// }; 

// function xyz(b){
//     console.log(b);
// };

// xyz(abc("Hello :)"));



// function abc() {
//     console.log("ABC");
//     return function () {
//         console.log("Return hone wala function");
//     }
// }
// abc()();
// const a = abc();
// a();



////////// lexical scoping \\\\\\\\\\\\


// let a = "abc";
// function abc(){
//     let a = "abc";
//     console.log(a);
// };
// abc();

// let b = "abc";
// function abc(){
//     // let a = "abc";
//     console.log(b);
// };
// abc();



/////////// default perimeter \\\\\\\\\\\\

// function abc(b = 1) {
//     let a = 420;
//     console.log(b * a);
// };

// abc();
// abc(10);
// abc("abn");



///////// Arrow function \\\\\\\\\\


let abc = () => {
    console.log("ABC");
}
abc();

// second example

let abs = a => {
    console.log(a);
};
abs("ABC");

// Third example

let abv = (a, b) => "Return hone wala string";

let a = abv();
console.log(a);

// Four example

let aa = _ => _

let abcc = aa("This is Arrow function");
console.log(abcc); 


//////////// Closures \\\\\\\\\\\\\\



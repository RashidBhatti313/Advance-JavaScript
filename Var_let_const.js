// ================================== var let const ===============================

// var

// reinitialization --- YES
// redeclaration --- YES
// block scope --- NOT
// hoisting --- YES


// let

// reinitialization --- NOT
// redeclaration --- YES
// block scope --- YES
// hoisting --- NOT


// const

// reinitialization --- NOT
// redeclaration --- NOT
// block scope --- YES
// hoisting --- NOT


// var a = 10;
// var a = "ABC";
// console.log(a);


// let a = 10;
// let a = "BAC"
// console.log(a);

// const a = 10;
// a = 20;
// console.log(a);


// if (true){
//     var a = 10;
// }
// console.log(a);

// if (true){
//     let a = 10;
// }
// console.log(a);

// if (true){
//     const a = 10;
// }
// console.log(a);

nam();

function nam() {
    var a = 10;
}
console.log(a);
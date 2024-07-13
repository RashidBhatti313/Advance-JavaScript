
// Common
// 1- Sare array function pe loop chalta h sab indexes me.
// 2- har ek aray ke callback function ata h. 
// 3- is parameter me callback function har ek iteration pe chalty h ---> agr me aray 5 indexes h tw callback functoin 5 dafa chaly ga
// 4- har ek callback function pehly me value or dosre me index or tesre me pora array dobara milta h 


// let r = ["A", "B", "C", "D", "E"];
// a.map((x, y, z) => {
//     console.log(x);
//     console.log(y);
//     console.log(z);
// });



/////////////////////////  a. Map()  \\\\\\\\\\\\\\\\\\\\


// let a = [1, 2, 3, 4, 5]
// a.map((x) => {
//     console.log(x);
// });

// let w = [
//     {
//         id: 1,
//         name: "ABC",
//     },
//     {
//         id: 2,
//         name: "POI",
//     },
//     {
//         id: 3,
//         name: "UIO",
//     },
//     {
//         id: 4,
//         name: "QWE",
//     },
//     {
//         id: 5,
//         name: "XYZ",
//     },

// ];

// let G = w.map((x, i, z) => {
//     return x.name;
// });
// console.log(G);


////////////////////////   b. Filter() \\\\\\\\\\\\\\\\\\

let w = [
    {
        id: 1,
        name: "ABC",
        category: "A",
        fee: 500,
        taxPercentage: 5,
        isPass: true,
    },
    {
        id: 2,
        name: "POI",
        category: "B",
        fee: 300,
        taxPercentage: 5,
        isPass: true,
    },
    {
        id: 3,
        name: "UIO",
        category: "A",
        fee: 500,
        taxPercentage: 5,
        isPass: true,
    },
    {
        id: 4,
        name: "QWE",
        category: "B",
        fee: 300,
        taxPercentage: 5,
        isPass: true,
    },
    {
        id: 5,
        name: "XYZ",
        category: "A",
        fee: 500,
        taxPercentage: 5,
        isPass: true,
    },

];

// let G = w.filter((x, i, z) => {
//     if (x.category == "A") {
//         return x.name;
//     };
// });
// console.log(G);


/////////////////////// c. ForEach() \\\\\\\\\\\\\\\\\\\\\\

// let count = 0;

// w.forEach((x,i,list) => {
//     x.inst = "SMIT";
//     count += x.fee;
//     let onepercent = x.fee / 100;
//     count += x.fee + onepercent * x.taxPercentage;
// })
// console.log(w, count);


////////////////////// d. Reduce() \\\\\\\\\\\\\\\\\\\\\\\

// is ke call back para different hoty h

// let b = w.reduce((x,y) => {
//     console.log(x,y.fee);
//     return y.fee;
// }, 0);


// let b = w.reduce((x,y) => {
//     console.log(x,y.fee);
//     return y.fee + x;
// }, 0);
// console.log(b);
let b = w.reduce((x, y) => {
    if (!x[y.category]) {
        x[y.category] = [];
    };
    x[y.category].push(y);
    return x;
}, {});

console.log(b);


///////////////////////// e. Some() \\\\\\\\\\\\\\\\\\\\\\\\

// let b = w.some((x) => {
//     if (!x.isPass) {
//         return x;
//     }
// });
// console.log(b);

////////////////// /////// f. Every() \\\\\\\\\\\\\\\\\\\\\\

// let b = w.every((x) => x.isPass);
// console.log(b);

///////////////// ///// g. Find() \\\\\\\\\\\\\\\\\\\\\\\\\

// let bb = w.find((x, i, list) => x.id == 3);
// console.log(bb);

////////////////////////// h. findIndex() \\\\\\\\\\\\\\\\\\\\\\\\\\

// let b = w.findIndex((x) => x.id === 4);
// console.log(b);

///////////////////////// i. flat() \\\\\\\\\\\\\\\\\\\\\\\\\

// let arr = ["a", "b", "c", [1, 2, 3, ["xa", "xb", "xc"]]];
// let r = arr.flat(Infinity);

// console.log(r);

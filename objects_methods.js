let obj = {
    id: 1,
    name: "ABC",
    age: 18,
    inst: "SMIT",
};

let keys = Object.keys(obj);
let val = Object.values(obj);
let entries = Object.entries(obj);
let freeze = Object.freeze(obj);
Object.freeze(obj);
obj.name = "XYZ";
console.log(keys);
console.log(val);
console.log(entries);
console.log(freeze);
console.log(obj);

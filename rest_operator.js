function abc(...rest) {
    console.log(rest);
}

abc(1, 2, 3, 4, 5, 6, 7, 8, 9);


function abc(a, b, c, ...abc){
    console.log(a, b, c, abc);
}

abc(1, 2, 3, 4, 5, 6, 7, 8, 9);
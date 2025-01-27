const myarr = [2, 4, 8, 7, 4, 23, 21];

for (let i = 0; i < myarr.length; i++) {
    console.log(myarr[i]);
};

console.log('for of loop');

for (let a of myarr) {
    console.log(a);
}

console.log('for each function');

myarr.forEach((n, i, a) => { console.log( n, i, a ); });

// WAP to print all even numbers from the array

myarr.forEach( (a) => {
    if(a%2===0){
        console.log(a);
    }
});

// WAP to create a new array with square of all elements of the given array
const newArr = [];

myarr.forEach( (n) => {
    newArr.push(n ** 2);
});

console.log(newArr);
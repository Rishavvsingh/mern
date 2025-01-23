// console.time('loop');
for (let i = 0; i < 50; i++) {
    console.log(i);
}
// console.timeLog('loop');

let a = 10;

while (a < 20) {
    console.log(a);
    a++;
    // a = a + 1;
    // a += 1;
}
console.log('do while loop');

let b = 20;

do {
    console.log(b);
    b++;
} while (b < 20);

// WAP to reverse a number
console.log('reverse a number');


let num = 37354;
let reverse = 0;

while(num>0){
    console.log(reverse);
    console.log(num);
    
    let d = num % 10;
    reverse = reverse*10+d;
    num = parseInt(num/10);
}
 
console.log(reverse);




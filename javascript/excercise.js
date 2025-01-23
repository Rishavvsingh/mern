//WAP to check if a number is divisible by 7 and 11

let num=7;
if(num1%7===0 && num1 % 11===0){
    console.log('divisible');
    
}else{
    console.log('not divisible');
    
}

// WAP to check if a number perfect square

console.log(36**0.5);
if(Number.isInteger(root)){
    console.log('perfect square');
}else{
    console.log('not perfect square');
    
}


//WAP to print all numbers divisible by 11 between 51 to 130

for(let i=51; i<=130; i++){
    if(i%11===0){
        console.log(i);
        
    }
}

console.log('check prime number');


//WAP to check if a number is prime or not
const num2=5;
let isPrime=true;
if(num<=1){

}
for(let i=2; i<=num2; i++){
    if(num% i===0){
console.log('not prime');
isPrime=false;
break;
    }
}

if(isPrime){
    console.log('prime');
    
}


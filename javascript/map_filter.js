const myarr = [2, 4, 8, 7, 4, 23, 21];

// map operation
const sqr = myarr.map( (n) => { return n**2 } );

console.log(sqr);

// WAP to mulitply all elements of the array by 10
const mul = myarr.map( (n) => { return n*10 } );

console.log(mul);

const names = ['Ramu', 'Raju', 'Kaliya', 'Pinki'];

console.log( 'abc'.toUpperCase() );


const upperNames = names.map( (n) => { return n.toUpperCase() } );
console.log(upperNames);

const prices = [ 23000, 4500, 2800, 1850, 1724 ];

console.log( 100 * 0.18 + 100 );

const rawPrices = ['₹34.60', '₹789.99', '₹123.375', '₹45.00'];
// [34, 789, 123, 45]

console.log( parseInt('₹62546.765'.slice(1)) );

const intPrices = rawPrices.map( (p) => { return parseInt(p.slice(1)) } );

console.log(intPrices);
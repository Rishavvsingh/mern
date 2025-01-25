const myarr=[45,'hello',true,undefined];

console.log(myarr);
console.log(Array.isArray(myarr) );

const movies=['1920','The Dark Knight','marco','The Godfather','RRR','PK'];
console.log(movies.length);

// indexing
console.log(movies[3]);
console.log(movies.indexOf('RRR'));
const ele=movies.at(-4);
console.log(ele);

movies[1]='The Superman';
console.log(movies);

// slicing
console.log(movies.slice(2,5) );
console.log(movies.slice(-4));
console.log(movies.slice(-4,100));

// adding and removing elements
movies.push('chhava'); // adds element at the end
movies.unshift('Flash'); // adds element at the beginning

console.log(movies);

movies.pop(); //removes element from the end
movies.shift(); //removes element from the beginning
console.log(movies);

// movies.splice(3,2); // removing elements
 movies.splice(3,2,'joker','Thor','Hulk') // replacing element
//movies.splice(3,0,'Aquaman'); // insert elemet

console.log(movies);













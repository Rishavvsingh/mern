const brands=['Apple','Motorola','Gionee','Samsung','Realme','Oneplus','Nothing'];

// access samsung, realme and oneplus using negative index

console.log(brands.slice(-4,-1));

//replace realme and oneplus with xiaomi and honor

brands.splice(4,2,'xiaomi','honor');

console.log(brands);

// add vivo at the beginning
 
brands.unshift('vivo');
console.log(brands);

// add infinix and micromax at the end

brands.splice(brands.length,0,'infinix','micromax');
console.log(brands);




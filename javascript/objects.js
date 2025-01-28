const user = {
    name: 'Raju',
    email: 'raju@mail.com',
    password: 'pinki123'
};

console.log(user);

console.log(user.name);
console.log(user['email']);

user.address = 'Lucknow';

console.log(user);

user.name = 'Lestrade';

console.log(user);

const myKeys = Object.keys(user);
console.log(myKeys);
const myValues = Object.values(user);
console.log(myValues);

console.log( [1, 2, 3, 4].includes(5) );
console.log( 'email' in user );

delete user.password;
console.log(user);
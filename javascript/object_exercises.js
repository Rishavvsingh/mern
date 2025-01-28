const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy s25',
    price: 124000,
    colors: ['white', 'grey', 'black']
};

// access price of the smartphone
console.log(smartphone.price);

// update the price to 123999
smartphone.price = 123999;
console.log(smartphone.price);

// access the 2nd color of the smartphone
console.log(smartphone.colors[1]);

// add new color after the white color
smartphone.colors.splice(1, 0, 'blue');
console.log(smartphone.colors);

const smartphoneList = [
    {
        brand: 'Samsung',
        model: 'Galaxy s25',
        price: 124000,
        colors: ['white', 'grey', 'black']
    },
    {
        brand: 'Apple',
        model: 'Iphone 13',
        price: 110000,
        colors: ['red', 'blue', 'black']
    },
    {
        brand: 'Oneplus',
        model: '11R',
        price: 40000,
        colors: ['silver', 'pink']
    },
    {
        brand: 'Oppo',
        model: 'Reno 10',
        price: 56000,
        colors: ['green', 'blue', 'white']
    },
    {
        brand: 'Realme',
        model: '15 Pro',
        price: 28000,
        colors: ['blue', 'black']
    },
];

// access price of the smartphone
console.log( smartphoneList[0].price );


// access 2nd color of 3rd smartphone
console.log( smartphoneList[2].colors[1] );

// add a new color to the last smartphone
smartphoneList.at(-1).colors.push('red');

console.log(smartphoneList.at(-1));
console.log(smartphoneList[smartphoneList.length - 1]);
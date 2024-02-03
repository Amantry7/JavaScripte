// const hello = 'hello мир';

// const test = {
//     hello,
//     key: 'молоко',
//     name: 'Аман',
//     age: 16
// };
// console.log(test)


const cart = {
    money: {
        price: 300,
        currency: 'Com',
        allow_currency: ['к', 'Евро', 'Доллар']
    },
    items: [{
        title: "Бургер",
        count: 3,
        price: 600
    }, {
        title: 'Кола',
        count:1,
        price: 50
    }],
};

cart["name"] = 'Абдулох'

console.log(cart)

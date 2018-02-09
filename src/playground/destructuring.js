// OBJECT DESTRUCTURING

// const person = {
//     name: 'Fabiano',
//     age: 35,
//     location: {
//         city: 'Maringa',
//         temp: 32
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


//
//  ARRAY DESTRUCTURING
//

const address = ['1124 Av. XV de Novembro', 'Maringá', 'Paraná', '87013-230'];
const [, city, state = 'New York'] = address;

console.log(`You're in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2,75'];
const [itemName, , mediumPrice] = item;
// grab first and third items using array destructuring
console.log(`A medium ${itemName} costs ${mediumPrice}.`);

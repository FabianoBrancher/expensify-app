import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push(expenses[0]); 
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('notes/-L7QUPX9VCnuFidMyMrF').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Python'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const result = snapshot.val();
//     console.log(`${result.name} is a ${result.job.title} at ${result.job.company}.`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//      database.ref().update({
//          name: 'Gustavo',
//          'job/title' : 'Manager',
//          'job/company' : 'Google'
//      });
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Fabiano Brancher',
//     age: 35,
//     stressLevel: 8,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Maringá',
//         country: 'Brazil'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// })

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('Itapema');

// database.ref('attributes').set({
//     height: '1,72',
//     weight: 86
// }).then(() => {
//     console.log('Second set call worked!')
// }).catch((e) => {
//     console.log('Things didnt work for the second error', e);
// });

// database.ref('isSingle').set(null);

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Remove succeeded.')
//     }).catch((e) => {
//         console.log('Remove Failed: ' + e.message)
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//     'location/city' : 'Seattle',
//     'location/country' : 'United States'
// }).then(() => {
//     console.log('Data updated!');
// }).catch(() => {
//     console.log('Update failed')
// });
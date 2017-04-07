const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 10
};

let token = jwt.sign(data, 'SOME_SECRET');

let decoded = jwt.verify(token, 'SOME_SECRET');

console.log(decoded);

// let message = 'Some string.';
// let hash = SHA256(message).toString();
//
// console.log(message);
// console.log(hash);
//
// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'SOME_SECRET').toString()
// };
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'SOME_SECRET').toString();


// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Don\'t trust!');
// }
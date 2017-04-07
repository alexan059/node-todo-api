const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

// Remove everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove();

Todo.findByIdAndRemove('58e788c821a0cf31f4c016ff').then((todo) => {
    console.log(todo);
});
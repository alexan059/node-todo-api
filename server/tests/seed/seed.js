const {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');

const {User} = require('./../../models/user');
const {Todo} = require('./../../models/todo');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
    _id: userOneId,
    email: 'user@example.com',
    password: 'userPassOne',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'THE_SECRET').toString()
    }]
}, {
    _id: userTwoId,
    email: 'john.doe@example.com',
    password: 'userTwoPass'
}];

const todos = [{
    _id: ObjectId(),
    text: 'First todo test',
    completed: false
}, {
    _id: ObjectId(),
    text: 'Second todo test',
    completed: true,
    completedAt: new Date().getTime()
}];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

const  populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
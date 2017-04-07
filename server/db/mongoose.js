let mongoose = require('mongoose');

const dbUrl = "mongodb://admin:abcd1234@ds033607.mlab.com:33607/node-todo-app-186458231";

mongoose.Promise = global.Promise;
mongoose.connect((process.env.port) ? dbUrl : 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
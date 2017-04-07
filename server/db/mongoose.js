let mongoose = require('mongoose');

const db = {
    mlab: "mongodb://admin:abcd1234@ds033607.mlab.com:33607/node-todo-app-186458231",
    local: "mongodb://localhost:27017/TodoApp"
};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PORT ? db.mlab : db.local);

module.exports = { mongoose };
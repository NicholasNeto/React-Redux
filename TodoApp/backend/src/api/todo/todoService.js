const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'update'])
Todo.updateOptions({new: true, runValidators: true})


module.exports = Todo
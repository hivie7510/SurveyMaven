const mongoose = require('mongoose')

module.exports = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    title: String,
    description: String,
    questions: Array,
})

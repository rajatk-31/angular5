const mongoose= require('mongoose'),
Schema = mongoose.Schema;

var login = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
})
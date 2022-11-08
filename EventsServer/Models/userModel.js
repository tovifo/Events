const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    "firstname": String,
    "lastname" : String,
    "address" :String,
     "gender" :String,
    "birth_date" :String,
    "profile" :String
},{versionKey: false})

//let UserModel = mongoose.model('EVENTSDB', UserSchema,'person')
let UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel;
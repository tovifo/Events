const mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
    "eventType": String,
    "eventDesc" : String,
    "minAge" :String,
     "maxAge" :String,
    "gender" :String,
    "locationName" :String,
    "street" :String,
    "houseNum" :String,
    "city" :String,
    "minParticipants" : Number,
    "maxParticipants" :Number,
    "groups" :Array,
    "creator" :String,
    "points" :String
},{versionKey: false})

let eventModel = mongoose.model('events', EventSchema)

module.exports = eventModel;
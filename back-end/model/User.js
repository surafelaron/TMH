const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'The first name field is required!'],
        trim: true,
        maxlength: 100,
       },
    lastName: {
        type: String,
        required: [true,'The last name field is required!'],
        trim: true,
        maxlength: 100,
       },
      email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
      bio: String,
      image: String,
      isAdmin: {default: false},
      password: {
        type: String,
        required: true,
        min: 6,
      },
      address: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        lat: Number,
        lng: Number,
      },
    }, {timestamps: true});
    
module.exports = mongoose.model('User', UserSchema)
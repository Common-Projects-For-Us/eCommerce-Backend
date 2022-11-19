const mongoose = require('mongoose'); 

const userSchema = mongoose.Schema({
  
    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    },

    firstName : {
        type: String,
        required: true
    },  
    
    lastName : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    phoneNo : { 
        type: Number, 
        required: true 
    }
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema  = userSchema;
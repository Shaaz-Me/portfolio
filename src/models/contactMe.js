const mongoose = require("mongoose");
const validator = require("validator");

const contactMe = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});


// we will create a new collection

const Contact = new mongoose.model('Contact',contactMe);

module.exports = Contact;
import { Schema, model } from "mongoose";
import validator from 'validator';
const { isEmail } = validator;

const contactMe = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!isEmail(value)){
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

const Contact = new model('Contact',contactMe);

export default Contact;
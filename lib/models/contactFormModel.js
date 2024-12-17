import mongoose from "mongoose";

const Schema = new mongoose.Schema({
        fullname:{
                type:String,
                required:true
        },
        email:{
                type:String,
                required:true
        },
        phoneNumber:{
                type:String,
                required:true
        },
        resourceOfInterest:{
                type:String,
                required:true
        },
        state:{
                type:String,
                required:true
        },
        country:{
                type:String,
                required:true
        },
        fieldOfWork:{
                type:String,
                required:true
        },
        date:{
                type:Date,
                default:Date.now()
        }
})

const EmailModel = mongoose.models.contactForm || mongoose.model('contactForm', Schema)

export default EmailModel
const mongoose = require('mongoose')

const CURDschema = new mongoose.Schema({
    username: {
        type:String,
        required: [true, 'usernamed must be required']
    },
    mobile: {
        type:Number,
        required: [true, 'mobile number must be required'],
        unique: [true, 'mobile number must be unique']
    }
},
{
    timestamps:true
})

const CURD = mongoose.model('CURD',CURDschema)

module.exports = CURD
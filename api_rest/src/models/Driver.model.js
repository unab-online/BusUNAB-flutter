const mongoose = require('mongoose');

var DriverSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    working:{
        type:Boolean,
        required: false,
        default:false
    },

})
module.exports= mongoose.model('Driver',DriverSchema)
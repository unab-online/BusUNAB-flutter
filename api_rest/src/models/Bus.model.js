
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const busSchema = Schema({
    state:{
        type: String,
        default: 'deactivate'
    },
    driver:{
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    },
    location:{
        type:String
    }
})


module.exports = mongoose.model('Bus',busSchema)
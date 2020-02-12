const mongoose = require('mongoose');


require('dotenv').config();

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected')).catch(err => console.log(err))

module.exports = mongoose;
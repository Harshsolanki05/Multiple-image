var mongoose = require('mongoose')

var imageschema = new mongoose.Schema({
    name:{
        type : String
    },
    image:{
        type : String
    }    
})

module.exports = mongoose.model("image-data",imageschema)
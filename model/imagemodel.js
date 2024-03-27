var mongoose = require('mongoose')

var imageschema = new mongoose.Schema({
    name:{
        type : String
    },
    image:{
        type : Array
    }    
})

module.exports = mongoose.model("image-data",imageschema)
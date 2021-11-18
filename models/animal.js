const mongoose= require('mongoose')

const animalSchema = new mongoose.Schema({
    name:{type:String},
    description:{type:String}
    


})

module.exports = mongoose.model('Animal',animalSchema);
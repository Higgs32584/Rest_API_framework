const mongooseDB= require('mongodb')
const mongoose= require('mongoose')

const animalSchema = new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    description:{type:String}
    


})

module.exports = mongoose.model("Animal", animalSchema);
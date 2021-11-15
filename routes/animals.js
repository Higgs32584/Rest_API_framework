import description from 'C:/Users/mjhig/.anaconda/Rest API framework/file.py'



const express= require('express')
const router= express.Router()

//Getting data from API
router.get('/',(req,res) => {
    res.send('choose a number 1-10 for an animal!')


})
router.get('/:id',(req,res) =>{
    
    res.send(description)
    
})

module.exports = router
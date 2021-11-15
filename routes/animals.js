const express= require('express')
const router= express.Router()

//Getting data from API
router.get('/',(req,res) => {
    res.send('Hello World!')


})
router.get('/:id',(req,res) =>{
    
    res.send(req.params.id)
})
//Sending data to the API
router.post('/', (req,res) => {
    

})
//Updating Data from the API
router.patch('/:id', (req,res) => {
    
    
})
//Deleting Data from the API
router.delete('/:id', (req,res) => {
    
    
})
module.exports = router
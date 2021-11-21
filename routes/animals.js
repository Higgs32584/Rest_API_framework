const express = require('express')
const router = express.Router()
const Animal = require('../models/animal')
//let animalModel = mongoose.model("Incident",animalSchema);

//Getting data from API
router.get('/:id', async (req, res) => {
  if(req.params.id == 0){
    let new_test = await Animal.find().exec()
    res.json(new_test);
  }
  else{
  let query = await Animal.findOne( {id : req.params.id}).exec();
  res.json(query)}
  
})
router.post('/load', async (req, res) => {
  name_array=["Giraffe","GreyHound","Zebra","Elephant","Squirrel","Crow","Cat","Deer","Hyena","Bear"]
  description_array=["Has a very Long Neck!!","The Best animal out there ;)","Has a lot stripes!","Has a very Long snout,also very big!!","Steals your acorns!", "Crows a lot!!","likes fish,also complains a lot","looks in headlights a lot!","Evil Henchmen in Lion King","Likes Honey!"]

  for(let i=0;i<10;i++){
    const animal = new Animal({
      id: i+1,
      name: name_array[i],
      description: description_array[i]
  
    })
    animal.save()
  }
  res.send("SUCCESS! ANIMALS LOADED!")

})



// router.get("/:gva_id(\\d+)", async (req, res) => {
//   // /api/incidents/19878
//   let query = await incidentModel.findOne({gva_id: req.params.gva_id}).exec();
//   res.json(query);
// });

router.post('/', async (req, res) => {
  const animal = new Animal({

    name: req.body.name,
    description: req.body.description

  })
  try {
    animal.save()
    res.status(201).json({animal})
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})




// async function getAnimal(req, res, next) {
//   let animal
//   try {
//     animal = Animal.find({name: req.params.name}).exec();
//     if (animal == null) {
//       return res.status(404).json({ message: 'Cannot find subscriber' })
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message })
//   }

//   res.animal = animal
//   next()
// }



module.exports = router
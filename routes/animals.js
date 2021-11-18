const express = require('express')
const router= express.Router()
const Animal = require('../models/animal')

//Getting data from API
router.get('/', async (req, res) => {
  try {
    const animals = Animal.find().exec()
    res.json(animals)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  const animal = new Animal({

    name: req.body.name,
    description: req.body.description

  })
  try {
    const newAnimal = animal.save()
    res.status(201).json({animal})
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function getAnimal(req, res, next) {
  let animal
  try {
    animal = Animal.find()
    if (animal == null) {
      return res.status(404).json({ message: 'Cannot find animal' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.animal = animal.exec()
  next();
}

module.exports = router
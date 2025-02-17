const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')

//get all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'GET to all workout page' })
})

router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET to single workout' })
})
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: error.message })

    }
})
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a single workout' })
})
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update a single workout' })
})
module.exports = router
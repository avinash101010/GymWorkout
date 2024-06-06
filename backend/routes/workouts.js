const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')
const { getAllWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

//get all workouts
router.get('/', getAllWorkouts)

router.get('/:id', getWorkout)
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
router.delete('/:id', deleteWorkout)
router.patch('/:id', updateWorkout)
module.exports = router
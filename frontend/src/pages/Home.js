import { useState, useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
const Home = () => {
    const { workouts, dispatch } = useWorkoutContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }
        fetchWorkouts()
    }, [dispatch])
    return (
        <div className='home'>

            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />

                ))}
            </div>
            <WorkoutForm />
            <h2>Home</h2>
        </div>
    )
}

export default Home

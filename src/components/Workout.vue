<template>
    <div v-if="!isWorkoutFinished" class="workout-container">
        <span class="workout-name">{{ workoutCopy.name }}</span>
        <ul>
            <li class="top-info-item">Start: {{ workoutCopy.date }}</li>
            <li class="top-info-item">Duration: {{ workoutCopy.duration }}</li>
            <li class="top-info-item">Exercises: {{ workoutCopy.exercises.length }}</li>
        </ul>

        <div class="exercisesContainer">
            <h1>Exercise Card</h1>
        </div>

        <div class="add-exercise">
            <h1>Add Exercise</h1>
        </div>

        <button class="end-workout-btn" @click="endWorkout">End Workout</button>
    </div>

    <div class="workout-summary" v-else>


    </div>

</template>

<script>


export default{
    data() {
        return {
            isWorkoutFinished: false,
            localDuration: 0,
            workoutCopy: JSON.parse(JSON.stringify(this.workout)) // Deep copy of the workout
        }
    },
    
    emits: ['workout-ended'],

    name: "WorkoutComponent",
    props: {
        workout: {
            type: Object,
            required: true,
        }
    },
    methods: {
        endWorkout() {
            const endTime = new Date();
            const duration = endTime.getTime() - this.workoutCopy.date.getTime();
            
            // Update the local copy instead of the prop
            this.workoutCopy = {
                ...this.workoutCopy,
                duration: duration
            };

            this.localDuration = duration;
            this.isWorkoutFinished = true;

            // Emit event to parent with updated workout
            this.$emit('workout-ended', this.workoutCopy);

            // Call save workout with the updated data
            this.saveWorkout(this.workoutCopy);
        },

        saveWorkout(workoutData) {
            // Set up saving workouts
            console.log('Saving workout:', workoutData);
            return null;
        }
    }
}
</script>

<style scoped>

.workout-container{
    margin: 2rem auto;
    width: 100%;
    background-color: rgba(18, 41, 43, 0.95);
    border-radius: 30px;
    padding: 2rem;
    box-sizing: border-box;
}

.workout-name{
    width: 100%;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    justify-content: center;
}

ul{
    list-style: none;
    display: flex;
    gap: 1rem;
    color: #ffd700;
    justify-content: center;
}

.end-workout-btn{
    width: 50%;
    border-radius: 20px;
    font-size: 16pt;
    align-items: center;
    margin-left: 25%;
    margin-top: 10%;
    background-color: rgb(42, 81, 85);
    border: none; 
    padding: 3% 0%;
    color: #E0E0E0;
    transition: transform 0.1s ease, box-shadow 0.2s ease;    
    outline: none; 
}

.end-workout-btn:hover{
    transform: scale(1.05);
    box-shadow: 2px 2px 15px rgba(42, 81, 85, 0.5);
    background-color: rgb(54, 103, 109);
}



.end-workout-btn:active {
    transform: scale(0.98); 
}


</style>
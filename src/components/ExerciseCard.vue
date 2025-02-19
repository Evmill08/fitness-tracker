<template>
    <div class="exercise-card">
        <div class="exercise-info">
            <h2>Exercise: {{ exercise.exerciseName }}</h2>
            <h2>Type: {{ exercise.type }}</h2>
            <h2>Muscle Groups: 
                <ul>
                    <li v-for="(muscle, index) in exercise.muscleGroups"
                        :key="index"
                        class="muscle-group"
                    >{{ muscle }}</li>
                </ul>
            </h2>
            <h2>Sets: 
                <ul>
                    <li v-for="(set, index) in exercise.sets"
                        :key="index"
                        class="set"
                    >
                        {{ `${set.weight}lbs x ${set.reps} reps (RPE: ${set.rpe})` }}
                        <span :class="set.completed ? 'completed' : 'pending'">
                            {{ set.completed ? '✓' : '⋯' }}
                        </span>
                    </li>
                </ul>
            </h2>
            <h2>Rest Time: {{ exercise.restTime }}</h2>
        </div>

        <button class="edit-workout-btn" :click="handleEditWorkout">Edit Workout</button>
    </div>
</template>

<script>

export default {
    props: {
        exercise: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.exercise-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.exercise-info h2 {
    font-size: 1.2em;
    margin: 10px 0;
}

.muscle-group {
    display: inline-block;
    margin-right: 10px;
    background-color: #e0e0e0;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.9em;
}

.set {
    margin: 5px 0;
    padding: 5px;
    background-color: #f5f5f5;
    border-radius: 4px;
}

.completed {
    color: green;
}

.pending {
    color: orange;
}

.edit-workout-btn{
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

.edit-workout-btn:hover{
    transform: scale(1.05);
    box-shadow: 2px 2px 15px rgba(42, 81, 85, 0.5);
    background-color: rgb(54, 103, 109);
}

.edit-workout-btn:active{
    transform: scale(0.98); /* Slightly reduce size to give press effect */
}
</style>

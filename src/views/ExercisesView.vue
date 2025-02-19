<template>
    <div class="exercise-view">
        <h1 class="header">Exercises</h1>
        <div class="exercises-container">
            <ExerciseCard
                v-for="exercise in exercises"
                :key="exercise.id"
                :exercise="exercise"
            />
        </div>
    </div>
</template>

<script>
//import { exerciseService } from '@/services/exerciceService';
//import { exerciseStore } from '@/stores/exerciseStore';
import ExerciseCard from '@/components/ExerciseCard.vue';

export default {
    components: {
        ExerciseCard,
    },
    async created (){
        //this.exercises = exerciseService.getExercises()
        this.exercises = this.getMockExercises(); // mock data for now
        //exerciseStore.setExercises(this.exercises)
    },
    data() {
        return {
            exercises: []
        };
    },
    methods: {
        getMockExercises() {
            return [
                {
                    id: 1,
                    exerciseName: "Bench Press",
                    type: "Strength",
                    muscleGroups: [
                        "Chest",
                        "Triceps",
                        "Front Delts"
                    ],
                    sets: [
                        {weight: "225", reps: "6", completed: true, time: "14:30", rpe: "8"},
                        {weight: "225", reps: "5", completed: true, time: "14:37", rpe: "8"},
                        {weight: "225", reps: "5", completed: false, time: "14:44", rpe: "9"},
                    ],
                    restTime: "5 Minutes"
                },
                {
                    id: 2,
                    exerciseName: "Squat",
                    type: "Strength",
                    muscleGroups: [
                        "Quads",
                        "Glutes",
                        "Core"
                    ],
                    sets: [
                        {weight: "315", reps: "5", completed: true, time: "15:00", rpe: "7"},
                        {weight: "315", reps: "5", completed: true, time: "15:08", rpe: "8"},
                        {weight: "315", reps: "4", completed: false, time: "15:16", rpe: "9"},
                    ],
                    restTime: "4 Minutes"
                }
            ]
        }
    }


}
</script>

<style scoped>
.header {
    text-align: center;
    color: black;
    margin: 20px 0;
}

.exercise-view{
    width: 90%;
    margin-left: 5%;
    background-color: rgba(18, 41, 43, 0.95);
    border-radius: 20px;
}

.exercises-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}
</style>
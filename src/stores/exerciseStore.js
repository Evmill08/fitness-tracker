import { reactive, readonly } from "vue";
import { ExerciseModel } from "@/models/models";

const state = reactive({
    currentExercises: null
})

export const exerciseStore = {
    state: readonly(state),

    setExercises(exerciseList){
        for (var i = 0; i < exerciseList.length; ++i){
            const exercise = exerciseList[i];
            const new_exercise = new ExerciseModel(
                exercise.id,
                exercise.name,
                exercise.type,
                exercise.muscleGroups,
                exercise.sets,
                exercise.restTime
            )
            state.currentExercises.push(new_exercise)
        }
        
    },

    clearExercises() {
        state.currentExercises = null
    },

    getExercises() {
        return state.currentExercises
    },

    getExercise(exerciseID) {
        var exercise = null;
        for (var i = 0; i < state.currentExercises.length; ++i){
            if (state.currentExercises[i].exerciseID == exerciseID){
                exercise = state.currentExercises[i];
            }
        }

        if (exercise){
            return exercise;
        }

        else {
            throw console.error("No exercise found for that ID");
        }
    },

    clearExerciseById(exerciseID) {
        for (var i = 0; i < state.currentExercises.length; ++i){
            if (state.currentExercises[i].exerciseID == exerciseID){
                state.currentExercises[i] = null;
            }
        }
    },

    // Pass in an exercise object
    addExercise(exerciseData) {
        state.currentExercises.push(exerciseData);
    },

    updateExercise(exerciseID, exerciseData) {
        for (var i = 0; i < state.currentExercises.length; ++i){
            if (state.currentExercises[i].exerciseID == exerciseID){
                state.currentExercises[i] = exerciseData;
            }
        }
    },
}
import { v4 as uuidv4 } from 'uuid';

export class UserModel {
    constructor( id, username, email, weight = 0, height = 0, workoutHistory = [], personalBests = {}) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.weight = weight;
        this.height = height;
        this.bmr_factor = (this.weight*10 + this.height*6.25) / 24 / 60;
        this.workoutHistory = workoutHistory;
        this.personalBests = personalBests;
    }

    createUser(email, username, height, weight){
        let uid = uuidv4();
        return UserModel(uid, username, email, weight, height, [], {});
    }

    addWorkout(workout) {
        this.workoutHistory.push(workout);
    }

    removeWorkout(workoutID) {
        this.workoutHistory = this.workoutHistory.filter(workout => workout.id !== workoutID);
    }

    calculateTotalCalories() {
        if (this.workoutHistory.length == 0 ){
            return 0;
        }

        return this.workoutHistory.reduce((total, workout) => {
            return total + workout.calculateWorkoutCalories(this.bmr_factor);
        }, 0);
    }

    calculateTotalTime() {
        if (this.workoutHistory.length == 0 ){
            return 0;
        }

        return this.workoutHistory.reduce((total, workout) => {
            return total + workout.duration;
        }, 0);
    }

    // In minutes currently, will have to change to seconds then convert to HH:MM:SS
    calculateTotalWeight() {
        if (this.workoutHistory.length == 0 ){
            return 0;
        }

        return this.workoutHistory.reduce((total, workout) => {
            return total + workout.calculateTotalVolume();
        }, 0);
    }
}

export class WorkoutModel {
    constructor(id, name, userID, exercises = [], date = new Date(), duration = 0) {
        this.id = id;
        this.name = name;
        this.userID = userID;
        this.exercises = exercises;
        this.date = date;
        this.duration = duration;
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
    }

    removeExercise(exerciseID) {
        this.exercises = this.exercises.filter(exercise => exercise.id !== exerciseID);
    }

    calculateTotalVolume() {
        if (this.exercises.length == 0 ){
            return 0;
        }

        return this.exercises.reduce((total, exercise) => {
            return total + exercise.sets.reduce((setTotal, set) => {
                return setTotal + (set.weight * set.reps);
            }, 0);
        }, 0);
    }

    isCompleted() {
        return this.exercises.every(exercise => 
            exercise.sets.every(set => set.completed)
        );
    }

    calculateWorkoutCalories(bmr_factor) {
        if (this.exercises.length == 0 ){
            return 0;
        }

        const exerciseCalories = this.exercises.reduce((total, exercise) => {
            return total + exercise.calculateCalories(bmr_factor);
        }, 0);

        //Excess Post-Exercise Oxygen Consumption to be added for a workout
        const averageIntensity = this.exercises.reduce((total, exercise) => {
            const exerciseRPE = exercise.sets.reduce((rpeTotal, set) => rpeTotal + (set.rpe || 0), 0) / exercise.sets.length;
            return total + exerciseRPE;
        }, 0) / this.exercises.length;

        const epocFactor = 1 + (averageIntensity / 10) * .2;

        return Math.round(exerciseCalories * epocFactor);
    }
}

export class ExerciseModel {
    constructor(id, name, type, muscleGroups = [], sets = [], restTime = 0) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.muscleGroups = muscleGroups;
        this.sets = sets;
        this.restTime = restTime;
    }

    addSet(weight, reps, rpe) {
        this.sets.push({
            weight,
            reps,
            completed: false,
            timestamp: new Date(),
            rpe
        });
    }

    removeSet(timestamp) {
        this.sets = this.sets.filter(set => set.timestamp !== timestamp);
    }

    completeSet(index) {
        if (this.sets[index]) {
            this.sets[index].completed = true;
            this.sets[index].timestamp = new Date();
        }
    }

    getMaxWeight() {
        return Math.max(...this.sets.map(set => set.weight));
    }

    calculateCalories(bmr_factor) {
        if (this.sets.length == 0 ){
            return 0;
        }

        return this.sets.reduce((totalCalories, set) => {
            if (!set.completed) {return totalCalories}

            const baseCalories = bmr_factor * 0.1 * set.weight / 30;

            const intensityMultiplier = Math.pow((set.rpe || 5) / 5, 1.5);

            const durationFactor = set.reps * 0.1;

            const setCalories = baseCalories * intensityMultiplier * durationFactor;

            return totalCalories + setCalories;
        }, 0);
    }
}

export class PersonalBestModel {
    constructor(exerciseID, weight = 0, reps = 0, date = new Date()) {
        this.exerciseID = exerciseID;
        this.weight = weight;
        this.reps = reps;
        this.date = date;
    }

    setPersonalBest(personalBest) {
        this.exerciseID = personalBest.exerciseID;
        this.weight = personalBest.weight;
        this.reps = personalBest.reps;
        this.date = personalBest.date;
    }
}

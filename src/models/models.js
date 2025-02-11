export class UserModel {
    constructor( id, username, email, weight = 0, height = 0, workoutHistory = [], personalBests = {}) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.weight = weight;
        this.height = height;
        this.workoutHistory = workoutHistory;
        this.personalBests = personalBests;
    }

    addWorkout(workout) {
        this.workoutHistory.push(workout);
    }

    removeWorkout(workoutID) {
        this.workoutHistory = this.workoutHistory.filter(workout => workout.id !== workoutID);
    }

    calculateTotalCalories() {
        return;
    }

    calculateTotalTime() {
        return;
    }

    calculateTotalWeight() {
        return;
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

    calculateWorkoutCalories() {
        return;
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

    calculateCalories() {
        return;
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

export class UserModel implements User{
    constructor(
        public id: string,
        public username: string,
        public weight: number = 0,
        public height: number = 0,
        public email: string,
        public workoutHistory: WorkoutModel[] = [],
        public personalBests: Record<string, PersonalBestModel>
    ){}

    addWorkout(workout: WorkoutModel){
        this.workoutHistory.push(workout);
    }

    removeWorkout(workoutID: string){
        let newWorkouts = this.workoutHistory.filter(workout => workout.id != workoutID);
        this.workoutHistory = newWorkouts;
    }

    // Calcuate total calories burned for a user using the workout calorie calculator
    calculateTotalCalories(): number {
        return;
    }

    calculateTotalTime(): number {
        return;
    }

    calculateTotalWeight(): number {
        return;
    }


}

export class WorkoutModel implements Workout{
    constructor(
        public id: string,
        public name: string,
        public exercises: Exercise[] = [],
        public date: Date = new Date(),
        public duration: number = 0,
        public userID: string
    ) {}

    addExercise(exercise: Exercise){
        this.exercises.push(exercise);
    }

    removeExercise(exerciseID: string){
        let newExercises = this.exercises.filter(exercise => exercise.id != exerciseID);
        this.exercises = newExercises;
    }

    calculateTotalVolume() : number {
        let totalVolume = 0;
        
        return this.exercises.reduce((total, exercise) => {
            return total + exercise.sets.reduce((setTotal, set) => {
                return setTotal + (set.weight * set.reps);
            }, 0);
        }, 0);
    }

    isCompleted(): boolean {
        return this.exercises.every(exercise => 
            exercise.sets.every(set => set.completed)
        );
    }

    // Calculate calories per workout using the calories per exercise function
    calculateWorkoutCalories(): number {
        return;
    }
}

export class ExerciseModel implements Exercise {
    constructor(
        public id: string,
        public name: string,
        public type: 'strength' | 'cardio',
        public muscleGroups: string[] = [],
        public sets: _Set[] = [],
        public restTime: number = 0
    ) {}

    addSet(weight: number, reps: number, rpe: number){
        this.sets.push({
            weight,
            reps,
            completed: false,
            timestamp: new Date(),
            rpe
        });
    }

    // Possibly change how we look for this set, timestamp may not be unique or even set
    removeSet(timestamp: Date){
        let newSets = this.sets.filter(set => set.timestamp != timestamp);
        this.sets = newSets;
    }

    completeSet(index: number){
        if (this.sets[index]){
            this.sets[index].completed = true;
            this.sets[index].timestamp = new Date();
        }
    }

    getMaxWeight(): number {
        return Math.max(...this.sets.map(set => set.weight));
    }

    // Calculate calories per exercise
    calculateCalories(): number{
        return;
    }
}

export class PersonalBestModel implements PersonalBest{
    constructor(
        public exerciseID: string,
        public weight: number = 0,
        public reps: number = 0,
        public date: Date = new Date()
    ) {}

    setPersonalBest(personalBest: PersonalBest){
        this.exerciseID = personalBest.exerciseID;
        this.weight = personalBest.weight;
        this.reps - personalBest.reps;
        this.date = personalBest.date;
    }
}
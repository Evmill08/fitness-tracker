interface User{
    id: string;
    username: string;
    weight: number;
    height: number; // in inches
    email: string;
    workoutHistory: Workout[];
    personalBests: Record<string, PersonalBest>;
}

interface Workout{
    id: string;
    name: string;
    date: Date;
    exercises: Exercise[];
    duration: number;
    notes?: string;
    userID: string;
}

interface Exercise{
    id: string;
    name: string;
    sets: _Set[];
    restTime: number;
    type: 'strength' | 'cardio';
    muscleGroups: string[];
    notes?: string;
}

interface _Set{
    weight: number;
    reps: number;
    completed: boolean;
    timestamp: Date;
    rpe: number;
}

interface PersonalBest{
    exerciseID: string;
    weight: number;
    reps: number;
    date: Date;
}


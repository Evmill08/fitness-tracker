import { db, userID } from "./firebase_config";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { exerciseStore } from "@/stores/exerciseStore";

const EXERCISE_COLLECTION = "Exercises"

export const exerciseService = {
    async addExercise(exerciseData) {
        const docRef = await addDoc(collection(db, EXERCISE_COLLECTION), {
            ...exerciseData,
            userID: userID
        })
        exerciseStore.addExercise(exerciseData)
        return docRef.id
    },

    async getExercises() {
        const querySnapshot = await getDocs(collection(db, EXERCISE_COLLECTION))
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
    },

    async getExercise(exerciseID) {
        const exerciseDoc = await getDoc(doc(db, EXERCISE_COLLECTION, exerciseID))
        return exerciseDoc.exists() ? {id: exerciseDoc.id, ...exerciseDoc.data()} : null
    },

    async updateExercise(exerciseID, exerciseData){
        await updateDoc(doc(db, EXERCISE_COLLECTION, exerciseID), exerciseData)
        exerciseStore.updateExercise(exerciseID, exerciseData)
    },

    async deleteExercise(exerciseID){
        await deleteDoc(doc(db, EXERCISE_COLLECTION, exerciseID))
        exerciseStore.clearExerciseById(exerciseID)
    }
}
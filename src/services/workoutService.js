import { db, userID } from "./firebase_config";
import { doc, getDoc, updateDoc, getDocs,  collection, addDoc, orderBy, query, deleteDoc  } from 'firebase/firestore'

const WORKOUT_COLLECTION = "Workouts";

export const workoutService = {
    async addWorkout(workoutData) {
        const docRef = await addDoc(collection(db, WORKOUT_COLLECTION), {
            ...workoutData,
            userID: userID,
            createdAt: new Date()
        }) 
        return docRef.id
    },

    async getWorkouts() {
        const q = query(
            collection(db, WORKOUT_COLLECTION),
            orderBy('createdAt', 'desc')
        )
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    },

    async getWorkout(workoutID){
        const workoutDoc = await getDoc(doc(db, WORKOUT_COLLECTION, workoutID))
        return workoutDoc.exists() ? {id: workoutDoc.id, ...workoutDoc.data()} : null
    },

    async updateWorkout(workoutId, workoutData) {
        await updateDoc(doc(db, WORKOUT_COLLECTION, workoutId), workoutData)
    },

    async deleteWorkout(workoutID){
        await deleteDoc(doc(db, WORKOUT_COLLECTION, workoutID))
    }
}
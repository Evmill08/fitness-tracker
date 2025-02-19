import { db, userID } from "./firebase_config";
import { doc, getDoc, updateDoc, setDoc, getDocs,  collection, addDoc, orderBy, query, deleteDoc  } from 'firebase/firestore'

const PB_COLLECTION = "PersonalBests"

export const personalBestService = {
    async addPersonalBest(pbData) {
        const docRef = await getDoc(collection(db, PB_COLLECTION), {
            ...pbData,
            userID: userID,
            achievedDate: new Date()
        })
        return docRef.id
    },

    async getPersonalBests(exerciseID = null){
        let q = collection(db, PB_COLLECTION)
        if (exerciseID) {
            q = query(q, where('exerciseID', '==', exerciseID))
        }
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    },

    async updatePersonalBest(pbID, pbData) {
        await updateDoc(doc(db, PB_COLLECTION, pbID), pbData)
    },

    async deletePersonalBest(pbID) {
        await deleteDoc(doc(db, PB_COLLECTION, pbID))
    }
}
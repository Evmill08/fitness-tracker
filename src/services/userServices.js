import { db, userID } from "./firebase_config";
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { userStore } from "../stores/userStore";

const USER_COLLECTION = "User";
const USER_ID = userID;

export const userService = {

    async getUser() {
        const userDoc = await getDoc(doc(db, USER_COLLECTION, USER_ID));
        if (userDoc.exists()) {
            const userData = userDoc.data()

            if (userData.username){
                userStore.setUser(userData)
                return userData
            }
        }
        return null;
    },

    async updateUser(userData) {

        await setDoc(doc(db, USER_COLLECTION, USER_ID), userData, {merge: true});
        userStore.setUser(userData)
    }
}
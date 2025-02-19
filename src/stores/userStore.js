import { reactive, readonly } from "vue";
import { UserModel } from "@/models/models";

const state = reactive({
    currentUser: null
})

export const userStore = {
    state: readonly(state),

    setUser(userData){
        state.currentUser = new UserModel(
            userData.id,
            userData.username,
            userData.email,
            userData.weight,
            userData.workoutHistory,
            userData.personalBests
        )
    },

    clearUser() {
        state.currentUser = null
    },

    getUser() {
        return state.currentUser
    }
}
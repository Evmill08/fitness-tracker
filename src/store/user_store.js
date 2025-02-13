import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    
    getters: {
        getUser: (state) => {
            return state.user;
        }
    },

    actions: {
        signIn(userData){
            this.user = userData;
        },

        addHeightAndWeight(weight = 0, height = 0){
            this.user.weight = weight;
            this.user.height = height;
        },

        addWorkout(workout) {
            if (workout) {
                this.user.workoutHistory.push(workout);
            }
        }
    },

})
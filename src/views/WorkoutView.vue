<template>
    <div>
        <Workout :workout="workoutData" @workout-ended="handleWorkoutEnd"></Workout>

    </div>
</template>

<script>
    import Workout from '@/components/Workout.vue';
    import { WorkoutModel } from '@/models/models';
    import { useUserStore } from '@/store/user_store';
    import { storeToRefs } from 'pinia';

    export default{
        components: {
            Workout
        },
        data() {
            const userStore = useUserStore();
            const {user} = storeToRefs(userStore);

            return {
                user: user
            }
        },
        
        computed: {
            workoutData() {
                if (!this.user) {
                    console.log('No user data available');
                    return null;
                }

                console.log('Creating workout with user data:', this.user);
                
                return new WorkoutModel(
                    "New Workout",
                    this.user.id,
                    [],
                    new Date(),
                    0
                );
            }
        },
        methods: {
            handleWorkoutEnd() {
                console.log("Workout ended");
                return null;
            }
        }
    }
</script>

<style module>
.header{
    position: absolute;
    top: 50%;
    left: 50%;
    color: black
}
</style>
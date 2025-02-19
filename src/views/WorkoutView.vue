<template>
    <div>
        <Workout :workout="workoutData" @workout-ended="handleWorkoutEnd"></Workout>
    </div>
</template>

<script>
    import Workout from '@/components/Workout.vue';
    import { WorkoutModel } from '@/models/models';
    import { userService } from '@/services/userServices';
    import { userID } from '@/services/firebase_config';

    export default{
        components: {
            Workout
        },
        async created (){
            this.user = userService.getUser();
        },
        data() {

            return {
                user: this.user
            }
        },
        
        computed: {
            workoutData() {
                if (!this.user) {
                    console.log('No user data available');
                    return null;
                }

                console.log('Creating workout with user data:', this.user);

                const workoutName = "New Workout";
                const timeStarted = this.formatDate(new Date());
                
                return new WorkoutModel(
                    workoutName,
                    userID,
                    [],
                    timeStarted,
                    0
                );
            }
        },
        methods: {
            handleWorkoutEnd() {
                console.log("Workout ended");
                return null;
            },
            formatDate(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0'+ minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
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
<template>
    <div class="container">

        <HomeProfileLink :username="user?.username"></HomeProfileLink>
        
        <MonthTrackHome></MonthTrackHome>

        <button class="start-workout-btn" :disabled="isUserValid" @click.prevent="startWorkout">Start Workout</button>
    </div>
</template>

<script>

    import HomeProfileLink from '@/components/HomeProfileLink.vue';
    import MonthTrackHome from '@/components/MonthTrackHome.vue';
    import { useUserStore } from '@/store/user_store';
    import { storeToRefs } from 'pinia';


    export default {
        computed: {
            isUserValid() {
                return !this.user
            }
        },
        components: {
            MonthTrackHome,
            HomeProfileLink
        },
        data() {
            const userStore = useUserStore();
            const {user} = storeToRefs(userStore);

            return {
                user: user
            }
        },
        methods: {
            startWorkout() {
                this.$router.push("/workout")
            }
        }
    }
    

</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
    
    background-color: rgb(17, 17, 17);
}

.start-workout-btn {
    width: 50%;
    border-radius: 20px;
    font-size: 16pt;
    align-items: center;
    margin-left: 25%;
    margin-top: 10%;
    background-color: rgb(42, 81, 85);
    border: none; 
    padding: 3% 0%;
    color: #E0E0E0;
    transition: transform 0.1s ease, box-shadow 0.2s ease;    
    outline: none; 
}

.start-workout-btn:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 15px rgba(42, 81, 85, 0.5);
    background-color: rgb(54, 103, 109);
}

.start-workout-btn:active {
    transform: scale(0.98); /* Slightly reduce size to give press effect */
}

</style>
<template>
    <body :class="$style.container">
        <router-link :to="`/profile`" :class="$style.userInfoLink">
            <div :class="$style.userInfo">
                <h1>{{ User.username }}</h1>
                <h1>Image</h1>
            </div>
        </router-link>

        <div :class="$style.monthTrack">
            <h1>This Month</h1>
            <div :class="$style.workoutStats">
                <ul>
                    <li 
                        v-for="(stat, index) in stats"
                        :key="index"
                    >
                        <div>
                            <h1>{{ stat.statName }}</h1>
                            <h2>{{ stat.stat }}</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </body>
</template>

<script>
import { UserModel } from '@/models/models';

    export default {
        props: {
            User: {
                type: UserModel,
                required: true,
            }
        },
        data(){
            return {
                stats: [
                    {statName: "Workouts", stat: this.User.workoutHistory.length},
                    {statName: "Time", stat: this.User.calculateTotalTime()},
                    {statName: "Calories", stat: this.User.calculateTotalCalories()},
                    {statName: "Weight", stat:  this.User.calculateTotalWeight()},
                ]
            }
        },
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
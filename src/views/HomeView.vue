<template>
    <div :class="$style.container">
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
    </div>
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
.container{
    width: 82.5%;
    height: 90%;
    position: absolute;
    left: 19.25%;
    top: 10%;
    background-color: rgb(17, 17, 17);
}

.userInfoLink{
    text-decoration: none;
    color: #F4FFFD;
    width: 15%;
    font-size: 6pt;
    display: flex;
    background-color: rgba(18, 41, 43);
    border-radius: 15px;
    position: absolute;
    left: 2.5%;
    top: 2.5%;
    padding: 8px;
}

.userInfoLink:hover{
    background-color:  rgb(42, 81, 85) ;
}

.monthTrack{
    position: absolute;
    width: 80%;
    top: 20%;
    left: 10%;
    background-color: rgba(18, 41, 43);
    border-radius: 30px;
}

ul{
    list-style: none;
    display: inline;
}




</style>
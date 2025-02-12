<template>
    <div class="month-track">
        <h1 class="month-title">This Month</h1>
        <router-link to="/workout" class="workout-stats-link">
            <div class="workout-stats">
                <ul>
                    <li v-for="(stat, index) in stats"
                        :key="index"
                        class="stat-item">
                        <div class="stat-container">
                            <h2 class="stat-name">{{ stat.statName }}</h2>
                            <p class="stat-value">{{ stat.stat }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </router-link>
    </div>
</template>

<script>
import { UserModel } from '@/models/models';

    export default{
        props: {
            User: {
                type: UserModel,
                requied: true,
            }
        }, 
        data(){
            return {
                stats: [
                    {statName: "Workouts", stat: this.User.workoutHistory.length},
                    {statName: "Time", stat: this.User.calculateTotalTime()},
                    {statName: "Calories", stat: this.User.calculateTotalCalories(this.User.bmr_factor)},
                    {statName: "Weight", stat:  this.User.calculateTotalWeight()},
                ]
            }
        },
    }
</script>
<style scoped>

.month-track {
    margin: 2rem auto;
    width: 90%;
    background-color: rgba(18, 41, 43, 0.95);
    border-radius: 30px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.month-title {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
}

.workout-stats-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.workout-stats {
    width: 100%;
    padding: 5%;
    border-radius: 20px;
    transition: background-color 0.4s ease, box-shadow 0.3s ease;
}

.workout-stats ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.stat-item {
    flex: 1;
    padding: 0 1rem;
}

.stat-container {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
    text-align: center;
    transition: transform 0.4s ease, box-shadow 0.2s ease;
}

.workout-stats:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
}

.workout-stats:hover .stat-container {
    transform: scale(1.05);
    box-shadow: 2px 6px 15px rgba(0, 0, 0, 0.25);
    background-color: rgba(18, 41, 43, 0.95);
}

.stat-name {
    color: #64ffda;
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
}

.stat-value {
    color: #ffd700;
    font-size: 1.8rem;
    margin: 0;
    font-weight: bold;
}
</style>
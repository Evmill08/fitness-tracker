import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import ExercisesView from "./views/ExercisesView.vue";
import StatsView from "./views/StatsView.vue";
import WorkoutView from "./views/WorkoutView.vue";
import ProfileView from "./views/ProfileView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: HomeView},
        {path: "/login", component: LoginView},
        {path: "/exercises", component: ExercisesView},
        {path: "/workout", name: "workout", component: WorkoutView},
        {path: "/stats", component: StatsView},
        {path: "/profile", component: ProfileView},


    ]
});

export default router;
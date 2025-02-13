<template>
    <div class="container">

        <HomeProfileLink :username="user?.username"></HomeProfileLink>
        
        <MonthTrackHome></MonthTrackHome>

        
    </div>
</template>

<script>

    import HomeProfileLink from '@/components/HomeProfileLink.vue';
    import MonthTrackHome from '@/components/MonthTrackHome.vue';
    import { useUserStore } from '@/store/user_store';
    import { storeToRefs } from 'pinia';


    export default {
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
</style>
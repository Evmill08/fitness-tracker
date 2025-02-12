<template>
    <div class="container">

        <HomeProfileLink :username="User.username"></HomeProfileLink>
        
        <MonthTrackHome :User="User"></MonthTrackHome>

        
    </div>
</template>

<script>

    import HomeProfileLink from '@/components/HomeProfileLink.vue';
    import MonthTrackHome from '@/components/MonthTrackHome.vue';
    import { UserModel } from '@/models/models';

    export default {
        components: {
            MonthTrackHome,
            HomeProfileLink
        },
        props: {
            User: {
                type: UserModel,
                required: true,
            }
        },
        
    }
    

</script>

<style scoped>




</style>
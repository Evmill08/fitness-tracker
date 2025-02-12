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
.container{
    width: 82.5%;
    height: 90%;
    position: absolute;
    left: 19.25%;
    top: 10%;
    background-color: rgb(17, 17, 17);
}



</style>
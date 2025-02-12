<template>
    <div class="header-container">
    <router-link :to="'/'" class="header-link">
        <h1>Fitness Tracker</h1>
    </router-link>
</div>

</template>

<script>
export default{
    name: "MainHeader"
}
</script>

<style scoped>
.header-container{
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
}

.header-link{
    text-decoration: none;
    color: #F4FFFD;
}





</style>
<template>
    <div :class="$style.container">
    <router-link :to="'/'" :class="$style.headerText">
        <h1>Fitness Tracker</h1>
    </router-link>
</div>

</template>

<script>
export default{
    name: "MainHeader"
}
</script>

<style module>
.container{
    width: 100%;
    height: 10%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(29, 29, 29);

}

.headerText{
    text-decoration: none;
    color: #F4FFFD;
    justify-content: center;
    align-items: center;
}





</style>
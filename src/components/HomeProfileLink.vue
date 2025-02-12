<template>
    <router-link :to="`/profile`" class="user-profile-link">
        <div class="user-info">
            <h1 class="user-image">img</h1>
            <h1 class="username">{{ username }}</h1>
        </div>
    </router-link>
</template>

<script>
    export default{
        props: ['username']
    }
</script>

<style scoped>

/*.user-profile-link {
    text-decoration: none;
    color: #F4FFFD;
    width: 10%;
    font-size: 6pt;
    display: flex;
    background-color: rgba(18, 41, 43);
    border-radius: 15px;
    position: absolute;
    left: 2.5%;
    top: 2.5%;
    padding-left: 15px;
}*/

.user-profile-link{
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: rgba(18, 41, 43);
    border-radius: 15px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #F4FFFD;
    transition: background-color 0.3s ease;
}

/* Ensure hover effect remains */
.user-profile-link:hover {
    background-color: rgb(42, 81, 85);
}

/* Layout: Image (left) | Username (right) */
.user-info {
    display: flex;
    align-items: center;
    width: 100%;
}

/* Image styles */
.user-image {
    padding: 5px 10px;
    border-right: 2px solid rgb(0, 0, 0);
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Adjust username spacing */
.username {
    padding-left: 10px;
    flex: 1; /* Makes sure username takes up remaining space */
    display: flex;
    align-items: center;
}



</style>
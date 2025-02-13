<template>
    <router-link :to="`/profile`" class="user-profile-link">
        <div class="user-info">
            <span class="user-image">img</span>
            <span class="username">{{ username }}</span>
        </div>
    </router-link>
</template>

<script>
    export default{
        props: ['username']
    }
</script>

<style scoped>
.user-profile-link {
    position: fixed;
    top: 15.5%;
    left: 19%;
    background-color: rgba(18, 41, 43);
    border-radius: 8px;
    padding: 0.4rem 0.6rem;
    display: inline-block;
    text-decoration: none;
    color: #F4FFFD;
    transition: background-color 0.3s ease;
    width: auto;
    max-width: 120px;
}

.user-profile-link:hover {
    background-color: rgb(42, 81, 85);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.user-image {
    font-size: 1rem;
    flex-shrink: 0;
    margin-right: 2%;
}

.username {
    font-size: 1rem;
    white-space: nowrap;
    
    max-width: 80px;
}
</style>
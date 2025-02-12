<template>
    <ul class="nav-list">
        <router-link    
            v-for="(page, index) in pages"
            :key="index"
            :to="`/${page.path}`"
            class="nav-link"
        >
            <li class="nav-item">{{ page.pageName }}</li>
        </router-link>
    </ul>
</template>

<script>
    export default{
        name: "MainNavigation",
        props: {
            pages: {
                type: Array,
                required: true,
            }
        }
    }

</script>

<style scoped>
.nav-list {
    list-style: none;
    padding: 1rem;
    margin: 0;
}

.nav-item {
    margin-bottom: 1rem;
}

.nav-link {
    display: block;
    padding: 1rem;
    border-radius: 20px;
    color: #E0E0E0;
    text-decoration: none;
    font-size: 1.25rem;
    transition: background-color 0.3s ease;
    margin-bottom: 2.5%;
}

.nav-link:hover {
    background-color: rgb(42, 81, 85);
}

</style>
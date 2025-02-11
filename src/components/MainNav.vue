<template>
    <nav :class="$style['mainNav']">
        <ul :class="$style['mainNavList']">
            <router-link    
                v-for="(page, index) in pages"
                :key="index"
                :to="`/${page.path}`"
                :class="$style['navLink']"
            >
                <li :class="$style.navLinkText">{{ page.pageName }}</li>
            </router-link>
        </ul>
    </nav>
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

<style module>
.mainNav {
    width: 17.5%;
    height: 100%;
    background-color: rgba(18, 41, 43);
    color: #F4FFFD;
    padding: 10px;
    position: absolute;
    top: 10%;
    left: 0;
}

.mainNavList{
    list-style: none;
    padding: 0;
    margin: 0;
}

.navLink{
    padding: 10px;
    display: block;
    border-radius: 20px;
    margin-bottom: 15%;
    font-size: 20pt;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.navLinkText{
    text-decoration: none;
    color: #E0E0E0
}

.navLink:hover{
    background-color:  rgb(42, 81, 85);;
}

</style>
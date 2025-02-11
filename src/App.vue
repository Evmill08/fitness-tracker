<template>

  <Header></Header>

  <MainNav
    :pages="pagesList"
  ></MainNav>

  <router-view
    :User="user"
  ></router-view>


</template>

<script>

import MainNav from './components/MainNav.vue';
import Header from './components/Header.vue';
import { UserModel } from './models/models';

export default {
  components: {
    MainNav,
    Header
  },
  data() {



    return {
      user: new UserModel('1', 'JohnDoe', 70, 80, 'john@example.com', [], {}),


      pagesList: [
        {pageName: "Login", path: "login"},
        {pageName: "Workout", path: "workout"},
        {pageName: "Exercises", path: "exercises"},
        {pageName: "Statistics", path: "stats"},
        {pageName: "Profile", path: "profile"}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

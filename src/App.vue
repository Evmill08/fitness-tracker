<!--<template>

  <Header></Header>

  <MainNav
    :pages="pagesList"
  ></MainNav>

  <router-view
    :User="user"
  ></router-view>


</template>-->

<template>
  <div class="app-container">
      <Header class="header" />
      <div class="content-wrapper">
          <MainNav :pages="pagesList" class="nav"/>
          <main class="main-content">
              <router-view :User="user"></router-view>
          </main>
      </div>
  </div>
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
.app-container {
  display: grid;
  grid-template-rows: 10vh 90vh;
  min-height: 100vh;
  background-color: rgb(17, 17, 17);
}

.header {
  grid-row: 1;
  width: 100%;
  background-color: rgb(29, 29, 29);
  z-index: 10;
}

.content-wrapper {
  grid-row: 2;
  display: grid;
  grid-template-columns: 17.5% 82.5%;
  height: 100%;
}

.nav {
  grid-column: 1;
  background-color: rgba(18, 41, 43);
  height: 100%;
  overflow-y: auto;
}

.main-content {
  grid-column: 2;
  background-color: rgb(17, 17, 17);
  position: relative;
  overflow-y: auto;
  padding: 20px;
}
</style>

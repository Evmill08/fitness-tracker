<template>
  <div class="app-container">
      <Header class="header"></Header>
      <div class="content-wrapper">
          <MainNav :pages="pagesList" class="nav"/>
          <main class="main-content">
              <router-view v-if="isAuthenticated"></router-view>
              <LoginView v-else />
          </main>
      </div>
  </div>
</template>

<script>

import MainNav from './components/MainNav.vue';
import Header from './components/Header.vue';
import { useUserStore } from './store/user_store';
import LoginView from './views/LoginView.vue';
import { computed } from 'vue';

export default {
  components: {
    MainNav,
    Header,
    LoginView
  },
  setup () {
    const userStore = useUserStore();
    const isAuthenticated = computed(() => userStore.user != null);

    return {
      isAuthenticated,
      pagesList: [
        {pageName: "Workout", path: "workout"},
        {pageName: "Exercises", path: "exercises"},
        {pageName: "Statistics", path: "stats"},
        {pageName: "Profile", path: "profile"}
      ]
    }
  },

  
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html, body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app-container {
  display: grid;
  grid-template-rows: auto 90vh 10vh;
  min-height: 100vh;
  background-color: rgb(17, 17, 17);
  width: 100%;
  height: 100%;
  font-family: "PT Serif", serif;
}

.header {
  grid-row: 1;
  width: auto;
  background-color: rgb(29, 29, 29);
  z-index: 10;
  overflow: hidden;
  justify-content: center;
}

.content-wrapper {
  grid-row: 2;
  display: grid;
  grid-template-columns: 17.5% 82.5%;
  flex: 1;
  height: 100%;
  overflow: hidden;

}

.nav {
  grid-column: 1;
  background-color: rgba(18, 41, 43);
  height: 100%;
  overflow: hidden;
}

.main-content {
  grid-column: 2;
  background-color: rgb(17, 17, 17);
  position: relative;
  overflow-y: auto;
  padding: 20px;
  overflow: hidden;
}

</style>

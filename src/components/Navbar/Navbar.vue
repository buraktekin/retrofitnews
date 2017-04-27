<template>
  <div class="row">
    <div class="navbar-brand">
      <router-link to="/">
        <img src="../../assets/logo-new-white.png"/>      
      </router-link>
    </div>
    <div class="mb-2" v-if="isUserActive">
      <button class="btn btn-md btn-block btn-theme" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<style lang="scss">
  .navbar-brand {
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    background: rgba(113, 87, 169, 0.2);
    border: 3px solid rgba(0, 0, 0, 0.9);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: .7s ease-in-out;
    pointer-events: none; 
    img {
      width: 80%;
      padding: 0;
      top: 3rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      position: relative;
      pointer-events: all;
    }
    &:hover {
      background: rgba(113, 87, 169, 0.6);
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
    }
    h2{ 
      transition: 1s ease-in-out;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -50px;
    }
  }
  @media screen and (max-width: 575px) {
    .navbar-brand {
      top: 0;
      width: 100%;
      height: 100%;
      opacity: .4;
      position: fixed;
    }
  }
</style>
<script type="text/javascript">
  import authHelper from '../Authentication/AuthHelper.js'

  export default {
    name: 'Navbar',
    data() {
      return {
        userActive: this.isUserActive(),
      }
    },
    methods: {
      isUserActive() {
        return authHelper.Firebase.auth().currentUser ? true : false;
      },
      signOut() {
        authHelper.signOut();
      }
    }
  }
</script>

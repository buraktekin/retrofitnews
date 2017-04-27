<template>
  <div class="row">
    <div class="navbar-brand">
      <router-link to="/">
        <img src="../../assets/logo-new-white.png"/>      
      </router-link>
    </div>
    <div class="navbar-buttons" v-if="isUserActive">
      <div class="btn-group d-flex flex-row" role="group" aria-label="control buttons">
        <button type="button" class="btn btn-md btn-theme btn-tooltip">
          <i class="fa fa-user"><span class="small"> {{ getUser().email }}</span>
        </button>
        <button type="button" class="btn btn-md btn-theme btn-tooltip">
          <i class="fa fa-cog"></i>
          <p class="theme tooltip">Settings</p>
        </button>
        <button type="button" class="btn btn-md btn-theme btn-tooltip" @click="signOut">
          <i class="fa fa-sign-out"></i>
          <p class="theme tooltip">Sign Out</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Navbar.scss"></style>
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
      getUser() {
        return authHelper.Firebase.auth().currentUser;
      },

      isUserActive() {
        return this.getUser() ? true : false;
      },
      
      signOut() {
        authHelper.signOut();
      }
    },
    mounted() {
      // $('.btn-tooltip').hover(function(e) {
      //   console.log($(e.target).find('p')[0]);
      // });
    }
  }
</script>

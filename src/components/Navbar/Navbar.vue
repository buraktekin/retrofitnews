<template>
  <div class="row">
    <!-- Show modal on sign out attempt -->
    <modal :modalTitle="modal.title"
          :modalBody="modal.body" 
          :modalFooterButton="modal.button" 
          :modalEvent="modal.event"></modal>

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
        <button type="button" class="btn btn-md btn-theme btn-tooltip" data-toggle="modal" data-target="#modal">
          <i class="fa fa-cog"></i>
          <p class="theme tooltip">Settings</p>
        </button>
        <button type="button" class="btn btn-md btn-theme btn-tooltip">
          <i class="fa fa-sign-out"></i>
          <p class="theme tooltip">Sign Out</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Navbar.scss"></style>
<script type="text/javascript" src="./Navbar.js"></script>

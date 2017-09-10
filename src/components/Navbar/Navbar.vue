<template>
  <div class="row">
    <!-- Show modal on sign out attempt -->
    <modal :modalTitle="modal.title"
          :modalBody="modal.body" 
          :modalButton="modal.button" 
          :modalEvent="modal.event"></modal>

    <div class="navbar-buttons" v-if="isUserActive">
      
      <div class="btn-group d-flex flex-row" role="group" aria-label="Control Buttons">
        <button type="button" class="btn btn-md btn-theme btn-tooltip p-3">
          <router-link to="/"><img src="../../assets/logo-new-white.png"/></router-link>
        </button>
      </div>
      
      <div class="btn-group d-flex flex-row" role="group" aria-label="Control Buttons">
        <button type="button" class="btn btn-md btn-theme btn-tooltip">
          <p class="small text-left">Welcome, <br />{{ getUser().email }}</p>
        </button>
        <button type="button" class="btn btn-md btn-theme btn-tooltip">
          <i class="fa fa-cog"></i>
          <p class="theme tooltip">Settings</p>
        </button>
        <button type="button" class="btn btn-md btn-theme btn-tooltip"
        data-toggle="modal" data-target="#modal">
          <i class="fa fa-sign-out"></i>
          <p class="theme tooltip">Sign Out</p>
        </button>
        <button type="button" class="btn btn-md btn-theme btn-tooltip btn-filter-activator" @click="isActive()">
          <i class="fa fa-filter"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Navbar.scss"></style>
<script type="text/javascript" src="./Navbar.js"></script>

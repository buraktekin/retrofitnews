<template>
  <a class="navbar-brand" href="/">
    <img src="https://68.media.tumblr.com/b852ea8d88f4676945e742647fecf018/tumblr_nmd36oiyJ71two90zo1_500.gif" width="90px" />
    <h4>VueNews</h4>
  </a>
</template>

<style lang="scss">
  a.navbar-brand {
    color: #FFF !important;
    width: 10rem;
    position: fixed;
    top: 5%;
    text-align: center;
    border: 3px solid rgba(255, 255, 255, .3);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: .7s ease-in-out;
    img {
      margin: 15px auto;
    }
    h4{ transition: 1s ease-in-out; }
    &:hover {
      transform: scale(1.1);
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
  @media screen and (max-width: 768px) {
    a.navbar-brand {
      top: 3px;
    }
  }
</style>

<template>
  <a class="navbar-brand" href="/">
    <img src="../../assets/logo-new-white.png"/>
  </a>
</template>

<style lang="scss">
  a.navbar-brand {
    background: rgba(73, 81, 136, 1);
    width: 10rem;
    height: 10rem;
    position: absolute;
    top: 5%;
    text-align: center;
    border: 3px solid rgba(0, 0, 0, .9);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: .7s ease-in-out;
    img {
      width: 100%;
      padding: 20px;
      top: 50%;
      left: 0;
      position: absolute;
      transform: translateY(-50%);
    }
    h2{ 
      transition: 1s ease-in-out;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -50px;
    }
    &:hover {
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
    }
  }
  @media screen and (max-width: 575px) {
    a.navbar-brand {
      top: -100px;
    }
  }
</style>

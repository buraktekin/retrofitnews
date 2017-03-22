<template>
  <a class="navbar-brand" href="/">
    <img src="http://i2.wp.com/www.randomzebra.com/wp-content/uploads/2016/03/Science_Kombat_Pythagoras.gif?fit=378%2C507" width="90px" />
    <h4>VueNews</h4>
  </a>
</template>

<style lang="scss">
  a.navbar-brand {
    color: #FFF !important;
    width: 10rem;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    border: 3px solid rgba(255, 255, 255, .3);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: .7s ease-in-out;
    img {
      margin: 15px auto;
    }
    h4{ transition: 1s ease-in-out; }
    &:hover {
      left: 50%;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
  @media screen and (max-width: 575px) {
    a.navbar-brand {
      transform: scale(.7);
      top: 3px;
      left: 25%;
    }
  }
</style>

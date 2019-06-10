<template>
  <div class="page-background">
    <nuxt />
  </div>
</template>

<style>
body, html {
  height: 100%;
  margin: 0;
}
.page-background {
  /* The image used */
  background-image: url("../assets/images/background.jpg");

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

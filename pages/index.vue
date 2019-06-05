<template>
  <section class="container">
    <Login/>
  </section>
</template>

<script>
import Login from "@/components/Login/Login";

export default {
  components: {
    Login
  }
};
</script>

<style >
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

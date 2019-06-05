<template>
  <header class="main-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <nuxt-link tag="el-menu-item" index="1" to="/list-contact">User management</nuxt-link>
      <el-menu-item index="2" @click="transitRegister">Register</el-menu-item>
      <el-menu-item index="3" id="log-out" @click="logout">Log out</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("login/logout");
      this.$message.success("Log out success");
      this.$router.push("/");
    },
    async transitRegister() {
      await this.$store.dispatch("contact/resetContact");
      this.$router.push("/contact-form");
    }
  }
};
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  z-index: 2;
}
#log-out {
  float: right;
}
</style>

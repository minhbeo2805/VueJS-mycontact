<template>
  <header class="main-header">
    <el-menu
      :default-active="activeIndex"
      class="header-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="horizontal"
    >
      <nuxt-link tag="el-menu-item" class="header-btn" index="1" to="/list-contact">Contact list</nuxt-link>
      <el-menu-item index="2" class="header-btn" @click="transitRegisterContact">Add contact</el-menu-item>
      <el-menu-item index="3" class="header-btn" id="log-out" @click="logout">Log out</el-menu-item>
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
    async transitRegisterContact() {
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

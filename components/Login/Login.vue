<template>
  <el-form
    :model="loginForm"
    status-icon
    ref="loginForm"
    label-width="120px"
    class="login-form"
    label-position="left"
  >
    <el-form-item label="Username" prop="username">
      <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="loginForm.password" autocomplete="off" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Login</el-button>
    </el-form-item>
    <el-form-item>
      <nuxt-link tag="el-link" type="primary" to="/register">Register</nuxt-link>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();
      let valid = await this.$store.dispatch(
        "login/loginAuthenticate",
        this.loginForm
      );
      if (valid) {
        this.$message.success("Login successfull");
        this.$router.push("list-profile");
      } else {
        this.$message.error("Login fail");
      }
    }
  }
};
</script>


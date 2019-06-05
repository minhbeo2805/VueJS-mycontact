<template>
  <el-form
    label-position="left"
    label-width="200px"
    ref="contactForm"
    :rules="rules"
    :model="contactForm"
    class="contact-form"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="contactForm.email" type="text"></el-input>
    </el-form-item>
    <el-form-item label="Name" prop="name">
      <el-input v-model="contactForm.name" type="text"></el-input>
    </el-form-item>
    <el-form-item label="Phone" prop="phone">
      <el-input v-model="contactForm.phone" type="text"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button v-if="contactForm.id" type="primary" @click="onSubmit">Update</el-button>
      <el-button v-else type="primary" @click="onSubmit">Create</el-button>
      <nuxt-link tag="el-button" to="/list-contact">Cancel</nuxt-link>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      contactForm: this.$store.getters["contact/contact"],
      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        name: [
          { required: true, message: "Please input username", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "Please input password", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    contactState() {
      return this.$store.state.contact.contact;
    }
  },
  watch: {
    contactState() {
      this.contactForm = this.$store.getters["contact/contact"];
      this.$refs.contactForm.clearValidate();
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      let isValidData = false;
      this.$refs.contactForm.validate(valid => {
        if (valid) {
          isValidData = true;
        } else {
          isValidData = false;
        }
      });
      if (isValidData) {
        let contactData = {
          id: this.contactForm.id,
          email: this.contactForm.email,
          name: this.contactForm.name,
          phone: this.contactForm.phone
        };

        if (contactData.id != null) {
          let response = await this.$store.dispatch(
            "contact/updateContact",
            contactData
          );
        } else {
          let response = await this.$store.dispatch(
            "contact/addContact",
            contactData
          );
        }

        this.$router.push("list-contact");
      }
    }
  }
};
</script>

<style scoped>
.contact-form {
  position: relative;
  z-index: 1;
}
</style>


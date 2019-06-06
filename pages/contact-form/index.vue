<template>
  <div>
    <Header/>
    <section class="container">
      <ContactForm/>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import ContactForm from "@/components/ContactForm/ContactForm";

export default {
  middleware:'auth',
  components: {
    Header,
    ContactForm
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

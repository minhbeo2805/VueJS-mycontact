<template>
  <div>
    <Header/>
    <ListContact/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import ListContact from "@/components/ListContact/ListContact";

export default {
  middleware:'auth',
  async fetch({ store }) {
    await store.dispatch("contact/getSearchContacts", {
      name: "",
      email: "",
      page: 1
    });
  },
  components: {
    Header,
    ListContact
  }
};
</script>


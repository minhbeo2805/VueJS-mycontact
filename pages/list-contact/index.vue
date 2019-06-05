<template>
  <div>
    <Header/>
    <ListProfile/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import ListProfile from "@/components/ListProfile/ListProfile";

export default {
  async fetch({ store }) {
    await store.dispatch("contact/getSearchContacts", {
      name: "",
      email: "",
      page: 1
    });
  },
  components: {
    Header,
    ListProfile
  }
};
</script>


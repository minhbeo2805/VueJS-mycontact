<template>
  <div class="list-container">
    <el-container>
      <el-main>
        <el-form label-position="right" label-width="200px" :inline="true">
          <el-form-item label="Name">
            <el-input v-model="name" type="text"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="email" type="text"></el-input>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <el-container>
      <el-main>
        <el-table :data="filteredAllContact"  :default-sort = "{prop: 'name', order: 'descending'}">
          <el-table-column prop="id" label="Id" width="200px"></el-table-column>
          <el-table-column prop="email" label="Email"></el-table-column>
          <el-table-column prop="name" sortable label="Name"></el-table-column>
          <el-table-column prop="phone" label="Phone"></el-table-column>
          <el-table-column label="Operation">
            <template slot-scope="contact">
              <el-button type="primary" icon="el-icon-edit" @click="editContact(contact.row.id)"></el-button>
              <el-button
                type="primary"
                icon="el-icon-delete"
                @click="deleteContact(contact.row.id)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="choosePage"
          :page-size="10"
          :total="contactCount"
        ></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

  <script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      name: "",
      currentPage: 1,
      filteredAllContact: this.$store.getters["contact/allContacts"],
      contactCount: this.$store.getters["contact/contactCount"]
    };
  },
  watch: {
    name: _.debounce(function() {
      this.currentPage = 1;
      this.searchContact();
    }, 500),
    email: _.debounce(function() {
      this.currentPage = 1;
      this.searchContact();
    }, 500),
    currentPage: function() {
      this.searchContact();
    }
  },
  computed: {
    // contactList() {
    //   let contactList = { list: [], count: 0 };
    //   let pageSize = 10;
    //   let start = (this.currentPage - 1) * pageSize;
    //   contactList.list = this.filteredAllContact.slice(start, start + pageSize);
    //   contactList.count = this.filteredAllContact.length;
    //   return contactList;
    // }
  },
  methods: {
    async editContact(id) {
      await this.$store.dispatch("contact/getContact", id);
      this.$router.push("contact-form");
    },
    choosePage(currentPage) {
      this.currentPage = currentPage;
    },
    async searchContact() {
      await this.$store.dispatch("contact/getSearchContacts", {
        name: this.name,
        email: this.email,
        page: this.currentPage
      });
      this.filteredAllContact = this.$store.getters["contact/allContacts"];
      this.contactCount = this.$store.getters["contact/contactCount"];
    },
    async deleteContact(id) {
      let response = await this.$store.dispatch("contact/deleteContact", id);
      this.searchContact();
    }
  }
};
</script>

<style scoped>
.list-container {
  margin-top: 4.5rem;
}
.el-pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.el-container {
  padding: 0 20%;
}
.list-container {
  position: relative;
  z-index: 1;
}
</style>

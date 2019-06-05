import {
  callApiGetAll,
  callApiAdd,
  callApiUpdate,
  callApiGetDetail,
  callApiDelete,
  callApiSearch
} from "../api/contact";
export const state = () => ({
  contacts: [],
  contact: {},
  contactCount: 0
});

export const actions = {
  async getAllContacts({ commit }) {
    let res = await callApiGetAll();
    commit("SET_CONTACT_LIST", res.data);
    commit("SET_CONTACT_COUNT", res.data.length);

  },

  async getSearchContacts({ commit }, params) {
    let res = await callApiSearch(params);
    commit("SET_CONTACT_LIST", res.data.content);
    commit("SET_CONTACT_COUNT", res.data.totalElements);
  },

  async getContact({ commit }, id) {
    let res = await callApiGetDetail(id);
    return commit("SET_CONTACT", res.data);
  },

  async resetContact({ commit }) {
    return commit("SET_CONTACT", {});
  },

  async addContact({ commit }, params) {
    let res = await callApiAdd(params);
    return res;
  },

  async deleteContact({ commit, dispatch }, id) {
    let res = await callApiDelete(id);
    return dispatch("getAllContacts");
  },

  async updateContact({ commit }, params) {
    let res = await callApiUpdate(params);
    return res;
  }
};

export const mutations = {
  SET_CONTACT_LIST(state, contactList) {
    state.contacts = contactList;
  },

  SET_CONTACT(state, contact) {
    state.contact = contact;
  },

  SET_CONTACT_COUNT(state, count) {
    state.contactCount = count;
  }
};

export const getters = {
  allContacts(state) {
    return state.contacts;
  },

  contact(state) {
    return Object.assign({}, state.contact);
  },

  contactCount(state) {
    return state.contactCount;
  }
};

import { callApiAuthenUser } from "../api/login";

export const state = () => ({
  authenticatedUser: null
});

export const actions = {
  async loginAuthenticate({ commit }, user) {
    let res = await callApiAuthenUser(user);
    console.log(res.data);
    if (res.data != null) {
      commit("SET_AUTH_USER", res.data);
      return true;
    } else {
      commit("REMOVE_AUTH_USER");
      return false;
    }
  },
  logout({ commit }) {
    commit("REMOVE_AUTH_USER");
  }
};

export const mutations = {
  SET_AUTH_USER(state, authenticatedUser) {
    state.authenticatedUser = authenticatedUser[0];
  },
  REMOVE_AUTH_USER(state) {
    state.authenticatedUser = null;
  }
};

export const getters = {
  authenticatedUser(state) {
    return state.authenticatedUser !== null
      ? Object.assign({}, state.authenticatedUser)
      : null;
  }
};

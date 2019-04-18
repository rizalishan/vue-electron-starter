const state = {
  user: {
    isUserLoggedIn: false,
    isTrialUser: 'true',
    trialDaysLeft: 0,
    userId: 0,
    fname: '',
    lname: '',
    email: '',
  },
};

const getters = {
  user: state => state.user,
};

const actions = {
  SET_USER({ commit }, user) {
    commit('SET_USER', user);
  },
  SET_USER_LOGIN_STATUS({ commit }, status) {
    commit('SET_USER_LOGIN_STATUS', status);
  },
  SET_USER_INFO({ commit }, fname, lname, email) {
    commit('SET_USER_INFO', fname, lname, email);
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_USER_LOGIN_STATUS(state, status) {
    state.user.isUserLoggedIn = status;
  },
  SET_USER_INFO(state, fname, lname, email) {
    state.user.fname = fname;
    state.user.lname = lname;
    state.user.email = email;
  },
};

export default {
  namespace: true,
  getters,
  state,
  actions,
  mutations,
};

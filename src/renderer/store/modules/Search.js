const state = {
  config: {
    visible: false,
    term: '',
  },
};

const getters = {
  searchVisible: state => state.config.visible,
  searchTerm: state => state.config.term,
};

const actions = {
  SET_SEARCH_RESULT_PANEL({ commit }, status) {
    commit('SET_SEARCH_RESULT_PANEL', status);
  },
  SET_SEARCH_TERM({ commit }, term) {
    commit('SET_SEARCH_TERM', term);
  },
};

const mutations = {
  SET_SEARCH_RESULT_PANEL(state, status) {
    state.config.visible = status;
  },
  SET_SEARCH_TERM(state, term) {
    state.config.term = term;
    state.config.visible = true;
  },
};

export default {
  namespace: true,
  getters,
  state,
  actions,
  mutations,
};

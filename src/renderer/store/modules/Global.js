const state = {
  isOnline: navigator.onLine,
  currentMenu: '',
  snackBar: {
    display: false,
    message: '',
    color: 'error',
  },
  modal: {
    display: false,
    heading: '',
    content: '',
  },
  showLoader: true,
  menuItems: [
    {
      icon: 'fa-folder-tree', title: 'Browse', url: '/browse', updates: 0,
    },
    {
      icon: 'fa-search', title: 'Search', url: '/search', updates: 0,
    },
    {
      icon: 'fa-clipboard-list-check', title: 'Index', url: '/index', updates: 0,
    },
    {
      icon: 'fa-highlighter', title: 'Annotations', url: '/annotations', updates: 0,
    },
    {
      icon: 'fa-bookmark', title: 'Bookmarks', url: '/bookmarks', updates: 0,
    },
    {
      icon: 'fa-comment-alt-lines', title: 'Notes', url: '/notes', updates: 0,
    },
    {
      icon: 'fa-download', title: 'Updates', url: '/updates', updates: 0,
    },
    {
      icon: 'fa-cog', title: 'Settings', url: '/settings', updates: 0,
    },
  ],
};

const getters = {
  menus: state => state.menuItems,
  isOnline: state => state.isOnline,
  snackBar: state => state.snackBar,
  modal: state => state.modal,
  showLoader: state => state.showLoader,
};

const actions = {
  SWITCH_MENU({ commit }, menu) {
    commit('SWITCH_MENU', menu);
  },
  // NOTE: This statement can be used to update menus
  // this.$store.dispatch('SET_MENU_UPDATES_PROPERTY', { index: 5, value: 6 });
  SET_MENU_UPDATES_PROPERTY({ commit }, updates) {
    commit('SET_MENU_UPDATES_PROPERTY', updates);
  },
  SET_ONLINE_STATUS({ commit }, status) {
    commit('SET_ONLINE_STATUS', status);
  },
  SET_SNACK_BAR({ commit }, data) {
    commit('SET_SNACK_BAR', data);
  },
  SET_MODAL({ commit }, data) {
    commit('SET_MODAL', data);
  },
  SET_LOADER({ commit }, status) {
    commit('SET_LOADER', status);
  },
};

const mutations = {
  SWITCH_MENU(state, menu) {
    state.currentMenu = menu;
  },
  SET_MENU_UPDATES_PROPERTY(state, updates) {
    state.menuItems[updates.index].updates = updates.value;
  },
  SET_ONLINE_STATUS(state, status) {
    state.isOnline = status;
  },
  SET_SNACK_BAR(state, data) {
    state.snackBar = data;
  },
  SET_MODAL(state, data) {
    state.modal = data;
  },
  SET_LOADER(state, status) {
    state.showLoader = status;
  },
};

export default {
  namespace: true,
  getters,
  state,
  actions,
  mutations,
};

const store_module = {
  state: {
    is_loading: false,
    clicked_times: 0,
  },
  mutations: {
    Loaded(state) {
      state.is_loading = !state.is_loading;
    },
    addTimes(state, payload) {
      state.clicked_times = state.clicked_times + payload;
    },
    resetCounter(state) {
      state.clicked_times = 0;
    },
  },
  actions: {
    // 異步操作或觸發多個 mutations 的方法
  },
  modules: {
    // 巢狀的組件
  },
};

export default store_module;

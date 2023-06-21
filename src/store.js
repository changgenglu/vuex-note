const storeModule = {
  state: {
    isLoading: false,
  },
  mutations: {
    Loaded(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    // 異步操作或觸發多個 mutations 的方法
  },
  modules: {
    // 巢狀的組件
  },
};


export default storeModule;

import axios from "axios";

const store_module = {
  state: {
    is_loading: "done",
    clicked_times: 0,
    user_data: "",
  },
  mutations: {
    getUser(state, payload) {
      state.user_data = payload;
      state.is_loading = "done";
    },
    dataLoading(state) {
      state.is_loading = "Loading...";
    },
    Loaded(state) {
      state.is_loading = "Loading...";
    },
    addTimes(state, payload) {
      state.clicked_times = state.clicked_times + payload.count;
    },
    resetCounter(state) {
      state.clicked_times = 0;
      state.is_loading = "done";
    },
  },
  actions: {
    // 異步操作或觸發多個 mutations 的方法
    get_user({ commit }) {
      axios
        .get("https://randomuser.me/api/?results=5")
        .then((response) => {
          const user_data = response.data.results;
          commit("dataLoading");
          commit("getUser", user_data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    another_actions() {
      console.log("do another actions");
    },
    clicked_actions(context, times) {
      context.commit({
        type: "addTimes",
        count: times,
      });
    },
  },
  modules: {
    // 巢狀的組件
  },
  getters: {
    FemaleNumber(state) {
      if (state.user_data) {
        return state.user_data.filter((item) => item.gender == "female").length;
      } else {
        return NaN;
      }
    },
    MaleNumber(state, getters) {
      return state.user_data.length - getters.FemaleNumber;
    },
  },
};

export default store_module;

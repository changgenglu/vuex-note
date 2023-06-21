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
    initLoading(state) {
      state.is_loading = "Loading...";
      state.user_data = "";
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
    getUser(context) {
      axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          console.log(response);
          const user_name = response.data.results[0].name;
          const user_data = user_name.title + ". " + user_name.first + " " + user_name.last;
          context.commit("getUser", user_data);
          context.dispatch("another_actions");
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
            count: times
        });
    },
  },
  modules: {
    // 巢狀的組件
  },
};

export default store_module;

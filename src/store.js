import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoading: false,
    },
    mutations: {
        Loaded(state) {
            state.isLoading = !state.isLoading;
            state.age = 22;
            Vue.setB(state, 'clicked', false);
        }
    }
})

export default store;
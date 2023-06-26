<template>
    <div>
        <p>author: {{ author }}</p>
        <p>female number: {{ FemaleNumber }}</p>
        <button @click="Reload()">get user data</button>
        <p>{{ is_loading }}</p>
        <button @click="dataLoading(), addTimes(6)">Reverse</button>
        <p>Click Times: {{ clicked_times }}</p>
        <button @click="resetCounter()">Reset Counter</button>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        author() {
            return "changgenglu"
        },
        ...mapState([
            'user_data',
            'is_loading',
            'clicked_times'
        ]),
        ...mapGetters(["FemaleNumber"])
        // FemaleNumber() {
        //     console.log(this.user_data);
        //     return this.user_data.filter(item => item.gender == 'female').length;
        // }
    },
    methods: {
        ...mapMutations([
            "dataLoading",
            "resetCounter"
        ]),
        ...mapActions(["get_user", "clicked_actions"]),
        addTimes() {
            this.clicked_actions(1);
        },
        Reload() {
            this.$store.commit("dataLoading");
            this.get_user();
        }
    },
    mounted() {
        // this.get_user();
    },
}
</script>
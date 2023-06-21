<template>
    <div>
        <p>author: {{ author }}</p>
        <p>random user: {{ user_data }}</p>
        <button @click="Reload()">get user data</button>
        <p>{{ is_loading }}</p>
        <button @click="Loaded(), addTimes(6)">Reverse</button>
        <p>Click Times: {{ clicked_times }}</p>
        <button @click="resetCounter()">Reset Counter</button>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
    computed: {
        author() {
            return "changgenglu"
        },
        ...mapState([
            'user_data',
            'is_loading',
            'clicked_times'
        ])
    },
    methods: {
        ...mapMutations([
            "Loaded",
            "resetCounter"
        ]),
        ...mapActions(["get_user", "clicked_actions"]),
        addTimes() {
            this.clicked_actions(1);
        },
        Reload() {
            this.$store.commit("initLoading");
            this.get_user();
        }
    },
    mounted() {
        this.get_user();
    },
}
</script>
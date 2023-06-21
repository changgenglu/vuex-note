<template>
    <div>
        <!-- <p>Loading: {{ ifLoading }}</p> -->
        <p>Loading: {{ is_loading }}</p>
        <button @click="reverseLoad(), addTimes()">Reverse</button>
        <!-- <p>Click Times: {{ clicked }}</p> -->
        <p>Click Times: {{ clicked_times }}</p>
        <button @click="resetCounter()">Reset Counter</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    // computed: {
    //     ifLoading() {
    //         return this.$store.state.is_loading;
    //     },
    //     clicked() {
    //         return this.$store.state.clicked_times;
    //     },
    // },
    computed: mapState([
        'is_loading',
        'clicked_times'
    ]),
    methods: {
        reverseLoad() {
            this.$store.commit("Loaded");
        },
        addTimes() {
            this.$store.commit("addTimes");
        },
        resetCounter() {
            this.$store.commit("resetCounter");
        }
    }
}
</script>
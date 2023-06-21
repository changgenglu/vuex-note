<template>
    <div>
        <p>Loading: {{ ifLoading }}</p>
        <button @click="reverseLoad(), addTimes()">Reverse</button>
        <p>Click Times: {{ clicked }}</p>
        <button @click="resetCounter()">Reset Counter</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState({
        ifLoading: 'is_loading',
        clicked: 'clicked_times'
    }),
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
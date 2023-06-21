<template>
    <div>
        <p>author: {{ author }}</p>
        <p>Loading: {{ ifLoading }}</p>
        <button @click="reverseLoad(), addTimes()">Reverse</button>
        <p>Click Times: {{ clicked }}</p>
        <button @click="resetCounter()">Reset Counter</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        author() {
            return "changgenglu"
        },
        ...mapState({
            ifLoading: state => state.is_loading,
            clicked: state => state.clicked_times
        })
    },
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
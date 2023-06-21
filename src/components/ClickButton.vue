<template>
    <div>
        <p>Loading: {{ ifLoading }}</p>
        <button @click="reverseLoad(), addTimes()">Reverse</button>
        <p>Click Times: {{ clicked }}</p>
        <button @click="resetCounter()">Reset Counter</button>
    </div>
</template>

<script>
export default {
    computed: {
        ifLoading() {
            return this.$store.state.is_loading;
        },
        clicked() {
            return this.$store.state.clicked_times;
        },
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
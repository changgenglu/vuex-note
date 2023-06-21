<template>
    <div>
        <p>author: {{ author }}</p>
        <p>Loading: {{ is_loading }}</p>
        <button @click="Loaded(), addTimes()">Reverse</button>
        <p>Click Times: {{ clicked_times }}</p>
        <button @click="resetCounter()">Reset Counter</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    computed: {
        author() {
            return "changgenglu"
        },
        ...mapState([
            'is_loading',
            'clicked_times'
        ])
    },
    methods: {
        ...mapMutations([
            "Loaded",
            "resetCounter"
        ]),
        addTimes() {
            return this.$store.commit('addTimes', 2);
        }
    }
}
</script>
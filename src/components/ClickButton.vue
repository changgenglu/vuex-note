<template>
    <div>
        <p>author: {{ author }}</p>
        <p>female number: {{ FemaleNumber }}</p>
        <p>male number: {{ MaleNumber }}</p>
        <button @click="Reload()">get user data</button>
        <p>{{ is_loading }}</p>
        <button @click="dataLoading(), addTimes(6)">Reverse</button>
        <p>Click Times: {{ clicked_times }}</p>
        <button @click="resetCounter()">Reset Counter</button>
        <hr>
        <p>資料中有沒有超過兩個女生？</p>
        <button @click="IsGenderOver2('female')">有嗎？</button>
        <br>
        <p>資料中有沒有超過兩個男生？</p>
        <button @click="IsGenderOver2('male')">有嗎？</button>
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
        ...mapGetters(["FemaleNumber", "MaleNumber", "IsGenderOver2"])
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
        },
        IsGenderOver2(gender) {
            this.IsGenderOver2(gender);
        }
    },
    mounted() {
        // this.get_user();
    },
}
</script>
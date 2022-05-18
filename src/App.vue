<template>
<!--    <NumberMatrix v-for="s in selects" :key="s" :selectElem="s" />-->
    <ids_selector />
</template>

<script>
import NumberMatrix from "@/components/NumberMatrix";
// import sqlformatter from "@/components/sqlformatter/sqlformatter";
import ids_selector from "@/components/ids_selector/ids_selector";
import Ids_selector from "@/components/ids_selector/ids_selector";

export default {
    name: 'App',

    components: {
        Ids_selector,
        NumberMatrix,
    },

    props: {
        selectorClass: String,
    },

    data() {
        const selects = document.querySelectorAll('.form-select')

        return {
            selects: selects,
            numberOfOptions: document.getElementById("cronjob_cronString_minutes"),
            ops: Array.from(document.querySelectorAll('.form-select option')),
        }
    },

    mounted() {

    },
}

</script>

<style>

</style>

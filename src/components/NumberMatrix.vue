<template>
    <div class="sc_nm" ref="parent">
        <div v-for="o in this.selectOptions" :key="o" @click="(event) => {
            toggleClass(o)
            event.target.classList.toggle('selected')
        }" class="item">
            {{ o.textContent }}
        </div>
    </div>
</template>

<script>

export default {
    name: "NumberMatrix",

    props: {
        selectElem: Object,
    },

    data() {
        return {
            selectOptions: this.selectElem.querySelectorAll('option'),
            target: null
        }
    },

    mounted() {
        this.hideSelect()
        this.wrapRow(this.$refs.parent.querySelectorAll('.item'))
    },

    methods: {
        hideSelect() {
            this.selectElem.classList.add('hidden')
        },

        toggleClass: function (option) {
            option.classList.toggle("selected")
        },

        wrapRow(items) {
            let percentage = 100 / Math.ceil(Math.sqrt(items.length))
            Array.from(items).forEach(
                e =>  e.style.flexBasis = `${percentage}%`
            )
        },
    }
}
</script>

<style>
    .hidden {
        visibility: hidden;
    }
    .sc_nm {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-end;
        max-width: 960px;
    }
    .item {
        width: 80px;
        height: 80px;
        border: 0.5px inset #cccccc;
        text-align: center;
        position: relative;
        box-sizing: border-box;
        font-family: sans-serif;
        display: table-cell;
        font-size: 20px;
    }
    .item:hover {
        cursor: pointer;
    }
    .selected {
        background-color: #F7A606;
        color: #7E939D;
    }
    .selected:hover {
        background-color: #F7A606;
    }
    .cleared {
        background-color: #000000;
    }
    .item:hover {
        background-color: #F7A606;
    }
    .wrap {
        flex-basis: 100%
    }
    .number{
        margin-top:25px;
    }
</style>
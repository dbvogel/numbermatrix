<template>
    <div class="ids_selector">
        <div class="ids-selector-container">

            <label for="input-id">ID</label><br>
            <input v-model="idInput" type="text" name="input-id"><br>
            <label for="input-label">Label</label><br>
            <input v-model="labelInput" type="text" name="input-label"><br><br>

            <button class="copy-button" @click="copyInputs()">+</button>
            <button class="remove-button" @click="removeSinglePair()">-</button>
            <br>
            <button class="safe-button" @click="sendPairs()">Save</button>
            <button class="edit-button" @click="editPair()">Edit</button>

            <div class="selection-display">
                <div class="table-select-container">
                    <div class="table-div">
                        <table>
                            <table class="selects-table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Label</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(keys, values) in this.idLabelPairs" :key="keys">
                                    <td>{{ values }}</td>
                                    <td>{{ keys }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </table>
                    </div>
                    <div class="select-div">
                        <div>Selected: {{ selected.toString() }}</div>
                        <select class="selection" multiple="multiple" v-model="selected">
                            <option disabled value=""></option>
                            <option v-for="(keys, values) in this.idLabelPairs" :key="keys">
                                {{ values }} {{ keys }}
                            </option>

                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ids_selector',
    data() {
        return {
            idInput: "",
            labelInput: "",
            idLabelPairs: {},
            selected: []
        }
    },
    methods: {
        copyInputs() {
            this.idLabelPairs[this.idInput] = this.labelInput
        },
        sendPairs() {
            let data = this.idLabelPairs
            fetch('', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
        removeSinglePair() {
            delete this.idLabelPairs[this.idInput]
            console.log(this.idLabelPairs)
        },
        editPair() {
            let idSelectorArray = Array.from(this.selected)
            const [values] = idSelectorArray
            const splitArray = values.split(" ");
            let id = splitArray[0];
            let label = splitArray[1];
            this.idInput = id
            this.labelInput = label
        }
    }
}
</script>
<style>
.selection {
    overflow: visible;
    width: 100%;
    min-width: 300px;
}

.selects-table {
    min-width: 300px;
}

.selects-table tbody {
    text-align: center;
}

.selects-table th {
    border: 1px solid #C0C0C0;
    padding: 5px;
    background: #F0F0F0;
}

.selects-table td {
    border: 1px solid #C0C0C0;
    padding: 5px;
}

.table-select-container {
    display: flex;
    min-width: 600px;
}

</style>

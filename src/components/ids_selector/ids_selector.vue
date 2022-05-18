<template>
    <div class="ids_selector">
        <div class ="ids-selector-container">
            <label for="input-id">ID</label><br>
            <input v-model="id_input" type="text" name="input-id"><br>
            <label for="input-label">Label</label><br>
            <input v-model="label_input" type="text" name="input-label"><br><br>

            <button class="copy-button" @click="copyInputs()">+</button>
            <button class="remove-button" @click="removeSinglePair()">-</button><br>
            <button class="safe-button" @click="sendPairs()">Save</button>
            <button class="edit-button">Edit</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Ids_selector',
        data() {
            return {
                id_input: "",
                label_input: "",
                idLabelPairs: {},
            }
        },
        methods: {
            copyInputs(){
                this.idLabelPairs[this.id_input] = this.label_input
                console.log(this.idLabelPairs)
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
            removeSinglePair(){
                delete this.idLabelPairs[this.id_input]
                console.log(this.idLabelPairs)
            }
        }
    }
</script>

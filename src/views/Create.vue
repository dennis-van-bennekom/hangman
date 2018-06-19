<template>
    <div>
        <h1>Create your own hangman game</h1>

        <input type="text" v-model="word">
        <button @click.prevent="generateLink">Create</button>

        <div>
            <router-link :to="link" v-if="link">{{ link }}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Create',
        data() {
            return {
                word: '',
                link: ''
            }
        },
        methods: {
            generateLink() {
                const word = this.word.trim().toLowerCase();

                if (!word) return;
                if(!/^[a-zA-Z]+$/.test(word)) return;

                this.link = btoa(word);
            }
        }
    }
</script>

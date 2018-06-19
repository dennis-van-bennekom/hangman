<template>
    <div class="play" v-if="!gameOver && !won">
        <h1>Lives: {{ lives }}</h1>
        <h2>{{ current }}</h2>
        <input type="text" maxlength="1" autofocus v-model="input" @keyup.enter="guess">
        <div class="guessed">
            <span v-for="guess in guessed">{{ guess }}</span>
        </div>
    </div>
    <div class="play" v-else-if="gameOver && !won">
        <h1>Game over!</h1>
        <a href="#" @click="retry">Retry?</a>
    </div>
    <div class="play" v-else-if="won">
        <h1>You won!</h1>
        <h2>The correct word was: {{ parsedWord }}</h2>

        <router-link to="/">
            Create your own
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Play',
        props: ['word'],
        data() {
            return {
                parsedWord: '',
                guessed: [],
                input: '',
                lives: 7,
                gameOver: false,
                won: false
            }
        },
        mounted() {
            this.parsedWord = atob(this.word);
        },
        computed: {
            current() {
                return this.parsedWord.split('').map((character) => {
                    return this.guessed.indexOf(character) > -1 ? character : '_';
                }).join('');
            }
        },
        methods: {
            guess() {
                const guess = this.input.trim().toLowerCase();

                if (!guess) return;

                this.input = '';

                if (this.guessed.indexOf(guess) > -1) return;

                this.guessed.push(guess);

                if (this.parsedWord.indexOf(guess) < 0) {
                    this.lives--;

                    if (this.lives === 0) {
                        this.gameOver = true;
                    }
                }

                if (this.current.indexOf('_') < 0) {
                    this.won = true;
                }
            },
            retry() {
                this.guessed = [];
                this.lives = 7;
                this.gameOver = false;
            }
        }
    }
</script>

<template>
  <div class="reaction-time">
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="onFinish" />
    <Results v-if="showResults" :score="score" />
  </div>
</template>

<script>
// - when finish, show the results component
// - output the score inside the results component
import Block from '../components/ReactionTime/Block.vue';
import Results from '../components/ReactionTime/Results.vue';

export default {
  name: 'ReactionTime',
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    onFinish(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>

<template>
  <div class="blog">
    <h1>Blog</h1>
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" /> -->
    <h2>Refs</h2>
    <!-- <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button> -->
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <p>{{ name }}</p>
    <div v-for="name in matchingName" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  name: 'Blog',
  setup() {
    // const p = ref(null);
    // console.log(p, p.value);

    // let name = ref('mario');
    // let age = ref(30);

    // const handleClick = () => {
    // console.log(p, p.value);
    // p.value.classList.add('test');
    // p.value.textContent = 'hello, ninjas';
    // name.value = 'luigi';
    // age.value = 35;
    // };

    // const ninjaOne = ref({ name: 'mario', age: 20 });
    // const ninjaTwo = reactive({ name: 'luigi', age: 22 });

    // const nameOne = ref('mario');
    // let nameTwo = reactive('luigi');

    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40;
    // };

    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 46;
    // };
    const name = computed(() => {
      return 'shaun';
    });

    const names = ref([
      'mario',
      'yoshi',
      'luigi',
      'toad',
      'bowser',
      'koopa',
      'peach',
    ]);

    const search = ref('');

    const matchingName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return {
      // ninjaOne,
      // updateNinjaOne,
      // ninjaTwo,
      // updateNinjaTwo,
      // nameTwo,
      name,
      names,
      search,
      matchingName,
      // age,
      // handleClick,
      // p,
    };
  },
  data() {
    return {
      score: 5,
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
};
</script>

<style>
.blog {
  text-align: center;
}
</style>

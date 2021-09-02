<template>
  <div v-if="job">
    <h1 v-if="job.title">{{ job.title }}</h1>
    <p>Job is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job...</p>
  </div>
</template>

<script lang="ts">
export default {
  props: ['id'],
  data() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const job: any = null;

    return {
      job,
    };
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style></style>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Sum msg="Welcome to HCM" />
    <SVGGraph />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sum from '@/components/Sum.vue';
import SVGGraph from '@/components/SVGGraph.vue';

export default defineComponent({
  name: 'About',
  components: {
    Sum,
    SVGGraph,
  },
});
</script>

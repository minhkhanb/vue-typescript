<template>
  <div v-if="showPosts" class="post">
    <h1>Post</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="posts.pop()">delete a post</button>
</template>

<script>
import { ref } from 'vue';
import PostList from '@/views/PostList.vue';
import { getPosts } from '@/composables/getPosts';

export default {
  name: 'Post',
  components: {
    PostList,
  },
  setup() {
    // const posts = ref([
    //   { title: 'welcome to the post', body: 'Lorem ipsum', id: 1 },
    //   { title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2 },
    // ]);
    const showPosts = ref(true);
    // const error = ref(null);
    // const load = async () => {
    //   try {
    //     let data = await fetch('http://localhost:3000/posts');
    //     console.log(data);
    //     if (!data.ok) {
    //       throw Error('no data available');
    //     }
    //     posts.value = await data.json();
    //   } catch (err) {
    //     error.value = err.message;
    //     console.log(error.value);
    //   }
    // };
    // load();
    // return { posts, showPosts, error };
    const { posts, error, load } = getPosts();

    load();

    return {
      posts,
      showPosts,
      error,
    };
  },
};
</script>

<style></style>

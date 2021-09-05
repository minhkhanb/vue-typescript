<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/post">Post</router-link>
  </div>

  <div class="navigates">
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
  </div>

  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  background: #f5f5f5;
}

.nav {
  text-align: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;

    &.router-link-exact-active {
      color: white;
      background: crimson;
    }
  }
}

.navigates {
  text-align: center;
}

header {
  text-align: center;
  .order {
    margin-top: 20px;
  }
}

button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>

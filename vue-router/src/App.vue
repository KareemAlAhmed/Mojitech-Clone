<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about', params: { slug: 'firstProject' } }"
      >About</router-link
    >
  </nav>
  <router-view />
  <div>
    <button @click="goBack">Back</button>
    <button @click="goForward">>Forward</button>
    <button @click="redirect">>Redirect</button>
  </div>
</template>


 <script>
export default {
  name: "app",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(+1);
    },
    redirect() {
      this.$router.push({ name: "about", params: { slug: "firstProject" } });
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: cyan;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
}
</style>

<template lang="en-us">
  <header>
    <div class="nav">
      <h1>meetups</h1>
      <h2 v-if="attending.length" class="calender-button">attending: <small>{{attending.length}} </small></h2>
      <h2 v-else="attending.length" class="calender-button">no events </h2>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  props: {
    attending: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  min-width: 90vw;
  margin: auto;
  background-color: #324b22;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
}

.calender-button {
  border-radius: 2rem;
  background-color: #ffffff;
  padding: 1rem;
}

.calender-button:hover {
  cursor: pointer;
  box-shadow: 0 8px 8px -4px #c0c0c0;
  transform: scale(1.02);
  transition: 0.6s;
}

h1 {
  color: #fff;
}
</style>

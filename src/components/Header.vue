<template lang="en-us">
  <header>
    <div class="nav">
      <h1> meetups </h1>
      <div :class="{background: background}" class="calender-button" @click="showCalender">
        <h2 v-if="attending.length" > attending: <small>{{attending.length}} </small> </h2>
      <h2 v-else="attending.length" >no events </h2>
      </div>
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
    return {
      background: false,
    };
  },
  methods: {
    showCalender() {
      if (this.attending.length) {
        this.$emit('toggleAttending');
        this.background = !this.background;
      }
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  min-width: 95vw;
  margin: auto;
  background-color: #324b22;
  z-index: 1;
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
  background-color: #324b22;
  color: #f0cf0f;
  height: 100%;
  width: 10em;
}

.calender-button:hover {
  cursor: pointer;
  box-shadow: 0 0 16px 0px #f0cf0f;
}
.background {
  background-color: #ffffff;
}
h1 {
  color: #fff;
}
</style>

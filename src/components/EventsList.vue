<template>
  <section class="main-container">
    <p>meetups near you</p>
    <div class="event-list">
      <Event v-on:addToCalender="sendToCalender" v-for="(event, index) in events" :key="index" :event="event" />
    </div>
  </section>
</template>

<script>
import Event from '@/components/Event';

export default {
  name: 'EventsList',
  components: { Event },
  props: {
    events: Array,
  },
  methods: {
    sendToCalender(event) {
      this.$emit('add-to-calender', event);
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: rgb(253, 253, 253);
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-size: 28px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: -0.02em;
  text-align: center;
}

.event-list {
  max-width: 50%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}

</style>

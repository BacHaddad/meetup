<template>
  <section class="main-calender">
    
   
      <Event v-on:addToCalender="sendToCalender" v-on:removeFromCalender="deleteFromCalender" v-for="(event, index) in attending" :key="index" :event="event" />

  </section>
</template>

<script>
import Event from '@/components/Event';

export default {
  name: 'Attending',
  components: { Event },
  props: {
    attending: Array,
  },
  methods: {
    sendToCalender(event) {
      console.log("log event from  eventsList", event);
      this.$emit('addToCalender', event);
    },
    deleteFromCalender(event) {
      console.log("log event from  eventsList", event);
      this.$emit('removeFromCalender', event);
    }
  },
};
</script>

<style scoped>
.main-calender {
    max-width: 15rem;
    position: absolute;
  right: 5%;
  top: 10%;
}



</style>
